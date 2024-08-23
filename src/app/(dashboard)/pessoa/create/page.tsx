'use client';

import { apiClient } from '@/src/api-client/client';
import { PessoaForm, PessoaFormInput } from '@/src/components';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export default function PessoaCreate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: apiClient.pessoa.create, mutationKey: ['createPessoa'], onError(e) {
            toast.error("Erro ao criar pessoa");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['pessoas'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Criado com sucesso");
            router.push("/pessoa");
            router.refresh();
        },
    });


    const onSubmit = async (values: PessoaFormInput) => {
        await mutate(values);
    }
    return <PessoaForm onSubmit={onSubmit} title="Adicionar pessoa" />
}