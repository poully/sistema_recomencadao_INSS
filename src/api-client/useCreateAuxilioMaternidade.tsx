import {
    useMutation,
} from '@tanstack/react-query'
import axios from 'axios';
import { useAxiosClient } from './useAxiosClient';
import { AuxilioMaternidadeUncheckedCreateInputObjectSchema } from "@/prisma/validation/schemas";
import { Prisma, AuxilioMaternidade } from '@prisma/client';

export const useCreateAuxilioMaternidade = () => {
    const client = useAxiosClient();
    const createAuxilioMaternidade = async ({ files, ...data }: Prisma.AuxilioMaternidadeUncheckedCreateInput & { files: File[] }) => {
        const response = await axios.post<{ data: AuxilioMaternidade }>('/api/auxilioMaternidade', data);
        if (response?.data?.data?.id) {
            const formData = new FormData();
            files.forEach((file) => {
                formData.append('files', file);
            });
            await axios.post(`/api/auxilioMaternidade/${response.data.data.id}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        }
        return response.data;
    };

    return useMutation({ mutationFn: createAuxilioMaternidade });
};
