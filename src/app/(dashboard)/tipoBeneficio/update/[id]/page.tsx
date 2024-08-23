'use client'
import { TipoForm, TipoFormInput } from '@/src/components';
import { Loader } from '@mantine/core';
import { apiClient } from "@/src/api-client/client";
import type { TipoBeneficioGet } from "@/src/api-client/client/tipoBeneficio";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function TipoBeneficioUpdate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const params = useParams<{ id: string }>();
    const { data: tipoBeneficio, error, isPending } = useQuery(
        {
            queryKey: ['tipoBeneficio', params.id],
            queryFn: async () => apiClient.tipoBeneficio.get({ id: params.id }) as Promise<TipoBeneficioGet[0]>
        }
    );
    const { mutate } = useMutation({
        mutationFn: apiClient.tipoBeneficio.update, mutationKey: ['updateTipoBeneficio'], onError(e) {
            toast.error("Erro ao alterar tipo de benefício");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['tiposBeneficio'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Alterado com sucesso.");
            router.push("/tipoBeneficio");
            router.refresh();
        },
    });
    const onSubmit = async (values: TipoFormInput) => {
        await mutate({ id: params.id, ...values });
    }
    return !isPending && tipoBeneficio ? <TipoForm onSubmit={onSubmit} data={tipoBeneficio as unknown as TipoFormInput} title="Editar tipo de benefício" /> : <Loader color="blue" />;
}