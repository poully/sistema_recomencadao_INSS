'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { PessoaFormInput, PessoaForm } from '@/src/components';
import { useIbge } from '@/src/hooks';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { Pessoa } from '@prisma/client';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';


export default function PessoaCreate() {
    const axios = useAxiosClient();
    const router = useRouter();


    const onSubmit = async (values: PessoaFormInput) => {
        try {
            const { estado, ...input } = values;
            const response = await axios.post("/pessoas", input);
            toast.success("Inserido com sucesso.");
            router.push("/pessoa");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return <PessoaForm onSubmit={onSubmit} title="Adicionar pessoa" />
}