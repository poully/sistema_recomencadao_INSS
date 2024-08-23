'use client'
import { BeneficioForm, BeneficioFormInput, BeneficioFormProps } from '@/src/components';
import { Loader } from '@mantine/core';
import { apiClient } from "@/src/api-client/client";
import type { BeneficioGet } from "@/src/api-client/client/beneficio";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function BeneficioUpdate() {

    const router = useRouter();
    const queryClient = useQueryClient();
    const params = useParams<{ id: string }>();
    const { data: beneficio, error, isLoading } = useQuery(
        {
            queryKey: ['beneficio', params.id],
            queryFn: async () => apiClient.beneficio.get({ id: params.id }) as Promise<BeneficioGet[0]>
        }
    );
    const { mutate } = useMutation({
        mutationFn: apiClient.beneficio.update, mutationKey: ['updateBeneficio'], onError(e) {
            toast.error("Erro ao alterar beneficio");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['beneficios'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Alterado com sucesso.");
            router.push("/beneficio");
            router.refresh();
        },
    });

    const onSubmit: BeneficioFormProps['onSubmit'] = async ({ values, files }) => {

        const docs = [];
        if (files) {
            const promises = files.map(async (file) => {
                const buffer = await file.arrayBuffer();
                const imagem = Buffer.from(buffer).toString('base64');
                return { imagem, descricao: file.name };
            })
            docs.push(...(await Promise.all(promises)));
        }
        const newValues = {
            ...values, documentos: docs
        };
        const response = await mutate({ id: params.id, ...newValues });

    }
    return !isLoading && beneficio ? <BeneficioForm onSubmit={onSubmit} data={beneficio as unknown as BeneficioFormInput} title="Editar beneficio" /> : <Loader color="blue" />;
}