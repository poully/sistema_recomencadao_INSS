'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Box, Button, Flex, Group, Select, Text, TextInput, rem } from '@mantine/core';
import { Dropzone, DropzoneAccept, DropzoneIdle, DropzoneReject, FileWithPath, PDF_MIME_TYPE } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { Beneficio, Documentos, Especialista, Situacao } from '@prisma/client';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';
import { BeneficioForm, BeneficioFormProps } from '@/src/components/BeneficioForm';

type Pessoa = {
    id: number;
    nome: string;
}

type Movimentacao = {
    id: number;
    nome: string;
}

type Tipo = {
    id: number;
    nome: string;
}

type BeneficioForm = { documentos?: Omit<Documentos, "id" | "descricao" | "beneficio_id">[] } & Omit<Beneficio, "id">;

export default function BeneficioCreate() {

    const router = useRouter();
    const axios = useAxiosClient();
    const onSubmit: BeneficioFormProps['onSubmit'] = async ({ values, files }) => {
        try {
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
            const response = await axios.post("/beneficio", newValues);
            toast.success("Inserido com sucesso.");
            router.push("/beneficio");
        } catch (e) {
            toast.error("Erro ao adicionar um novo beneficio");
        }
    }
    return (
        <BeneficioForm onSubmit={onSubmit} />
    );
}