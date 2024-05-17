'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Box, Button, Group, Image, Select, SimpleGrid, Text, TextInput, rem } from '@mantine/core';
import { Dropzone, DropzoneAccept, DropzoneIdle, DropzoneReject, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { Beneficio, Documentos } from '@prisma/client';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { toast } from 'react-toastify';

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
    const [pessoa] = useState<Pessoa[]>([]);
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const axios = useAxiosClient();
    const router = useRouter();
    const form = useForm<BeneficioForm>({
        initialValues: {
            numero_beneficio: '',
            situacao_id: 0,
            pessoa_id: 0,
            tipo_id: 0,
            especialista_id: 0,
        },
    });

    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: BeneficioForm) => {
        startTransition(async () => {
            try {
                const docs = [];
                if (files) {
                    const promises = files.map(async (file) => {
                        const buffer = await file.arrayBuffer();
                        const conteudo = Buffer.from(buffer).toString('base64');
                        const extensao = file.name.split('.').pop();
                        return { conteudo, extensao };
                    })
                    docs.push(...(await Promise.all(promises)));
                }
                const newValues = { ...values, documentos: docs };
                const response = await axios.post("/beneficio", newValues);
                toast.success("Inserido com sucesso.");
                router.push("/beneficio");
            } catch (e) {
                toast.error("Erro ao adicionar um novo beneficio");
            }
        });
    }
    return (
        <Box>
            <Text variant="h1">Adicionar Beneficio</Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Número Beneficio"
                    {...form.getInputProps('numero_beneficio')}
                />
                <Select
                    label="Pessoa"
                    placeholder="Selecione a pessoa"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('pessoa')}
                />
                <Select
                    label="Situação"
                    placeholder="Selecione a Situação"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('situacao')}
                />
                <Select
                    label="Movimentação"
                    placeholder="Selecione a Movimentação"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('movimentacao')}
                />
                <Select
                    label="Tipo de Beneficio"
                    placeholder="Tipo de Beneficio"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('tipoBeneficio')}
                />
                <Select
                    label="Especialista"
                    placeholder="Selecione o Especialista"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('especialista')}
                />
                <Dropzone
                    onDrop={setFiles}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}

                >
                    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                        <DropzoneAccept>
                            <IconUpload
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                                stroke={1.5}
                            />
                        </DropzoneAccept>
                        <DropzoneReject>
                            <IconX
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                                stroke={1.5}
                            />
                        </DropzoneReject>
                        <DropzoneIdle>
                            <IconPhoto
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                                stroke={1.5}
                            />
                        </DropzoneIdle>

                        <div>
                            <Text size="xl" inline>
                                Arraste as imagens aqui ou clique para selecionar os arquivos
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={7}>
                                Anexe quantos arquivos quiser, cada arquivo não deve exceder 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
                <SimpleGrid cols={{ base: 1, sm: 4 }} mt={files.length > 0 ? 'xl' : 0}>
                    {files?.length ? files.map((file, index) => {
                        const imageUrl = URL.createObjectURL(file);
                        return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
                    }) : null}
                </SimpleGrid>

                <Button type="submit" loading={isPending}>Adicionar</Button>
            </form>
        </Box>
    );
}