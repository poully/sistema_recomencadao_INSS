'use client'
import { PessoaForm, PessoaFormInput } from '@/src/components';
import { Loader } from '@mantine/core';
import { apiClient } from "@/src/api-client/client";
import type { PessoaGet } from "@/src/api-client/client/pessoa";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function PessoaUpdate() {

    const router = useRouter();
    const queryClient = useQueryClient();
    const params = useParams<{ id: string }>();
    const { data: pessoa, error, isLoading } = useQuery(
        {
            queryKey: ['pessoa', params.id],
            queryFn: async () => apiClient.pessoa.get({ id: params.id }) as Promise<PessoaGet[0]>
        }
    );
    const { mutate } = useMutation({
        mutationFn: apiClient.pessoa.update, mutationKey: ['updatePessoa'], onError(e) {
            toast.error("Erro ao alterar pessoa");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['pessoas'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Alterado com sucesso.");
            router.push("/pessoa");
            router.refresh();
        },
    });
    const onSubmit = async (values: PessoaFormInput) => {
        await mutate({ id: params.id, ...values });
    }

    return !isLoading && pessoa ? <PessoaForm onSubmit={onSubmit} data={pessoa as unknown as PessoaFormInput} title="Editar pessoa" /> : <Loader color="blue" />;
}