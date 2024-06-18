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
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const [tipos, setTipo] = useState<Tipo[]>([]);
    const [situacoes, setSituacoes] = useState<Situacao[]>([]);
    const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
    const axios = useAxiosClient();
    useEffect(() => {
        const fetchData = async () => {
            const endpoints = ["/pessoas", "/tipoBeneficio", "/situacao", "/especialista"];
            const promiseAllResults = await Promise.all(endpoints.map(async e => axios.get(e)));
            const [responsePessoa, responseTipo, responseSituacao, responseEspecialista] = promiseAllResults;
            setPessoas(responsePessoa.data);
            setTipo(responseTipo.data);
            setSituacoes(responseSituacao.data);
            setEspecialistas(responseEspecialista.data);
        }
        fetchData();
    }, []);
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
    const removeFile = useCallback((index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    }, [files]);
    const addFile = useCallback((newFiles: FileWithPath[]) => {
        setFiles([...files, ...newFiles]);
    }, [files]);
    const handleSubmit = (values: BeneficioForm) => {
        startTransition(async () => {
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
                    data={pessoas.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('pessoa_id')}
                />
                <Select
                    label="Situação"
                    placeholder="Selecione a Situação"
                    data={situacoes.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('situacao_id')}
                />
                <Select
                    label="Tipo de Beneficio"
                    placeholder="Tipo de Beneficio"
                    data={tipos.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('tipo_id')}
                />
                <Select
                    label="Especialista"
                    placeholder="Selecione o Especialista"
                    data={especialistas.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('especialista_id')}
                />
                <Dropzone
                    onDrop={addFile}
                    maxSize={5 * 1024 ** 2}
                    accept={PDF_MIME_TYPE}

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
                                Arraste os pdfs aqui ou clique para selecionar os arquivos
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={7}>
                                Anexe quantos arquivos quiser, cada arquivo não deve exceder 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
                <Box>
                    {files?.length ? files.map((file, index) => {
                        return <Flex align="center"><span>{file.name}</span><span style={{ cursor: "pointer" }}><IconX color='red' onClick={() => removeFile(index)} /></span></Flex>;
                    }) : null}
                </Box>

                <Button type="submit" loading={isPending}>Adicionar</Button>
            </form>
        </Box>
    );
}