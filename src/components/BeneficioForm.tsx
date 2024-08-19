'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Box, Button, Flex, Group, rem, Select, Text, TextInput } from '@mantine/core';
import { Dropzone, DropzoneAccept, DropzoneIdle, DropzoneReject, FileWithPath, PDF_MIME_TYPE } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { Beneficio, Especialista, TipoMovimentacao, Pessoa, Situacao, Tipo } from '@prisma/client';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useCallback, useEffect, useState, useTransition } from 'react';


export type BeneficioFormInput = Omit<Beneficio, "id">;



type BeneficioFormOutput = BeneficioFormInput & { tipo_movimentacao_id: string };

export type BeneficioFormProps = {
    data?: BeneficioFormInput | undefined;
    onSubmit?: (args: { values: BeneficioFormOutput, files: File[] }) => Promise<void>;
    title?: string;
}


export function BeneficioForm({ data, onSubmit, title }: BeneficioFormProps) {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const [tipos, setTipo] = useState<Tipo[]>([]);
    const [situacoes, setSituacoes] = useState<Situacao[]>([]);
    const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
    const [tipoMovimentacao, setTipoMovimentacao] = useState<TipoMovimentacao[]>([]);
    const axios = useAxiosClient();
    const form = useForm<BeneficioFormOutput>({
        initialValues: {
            numero_beneficio: '',
            situacao_id: '',
            pessoa_id: '',
            tipo_id: '',
            especialista_id: '',
            tipo_movimentacao_id: '',
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            const endpoints = ["/pessoas", "/tipoBeneficio", "/situacao", "/especialista", "/tipoMovimentacao"];
            const promiseAllResults = await Promise.all(endpoints.map(async e => axios.get(e)));
            const [responsePessoa, responseTipo, responseSituacao, responseEspecialista, responseMovimentacao] = promiseAllResults;
            setPessoas(responsePessoa.data);
            setTipo(responseTipo.data);
            setSituacoes(responseSituacao.data);
            setEspecialistas(responseEspecialista.data);
            setTipoMovimentacao(responseMovimentacao.data);
        }
        fetchData();
    }, []);



    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: BeneficioFormOutput) => {
        if (onSubmit) {
            startTransition(async () => onSubmit({ values, files }));
        }
    }
    const removeFile = useCallback((index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    }, [files]);
    const addFile = useCallback((newFiles: FileWithPath[]) => {
        setFiles([...files, ...newFiles]);
    }, [files]);


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
                    label="Tipo de Movimentação"
                    placeholder="Tipo de Movimentação"
                    data={tipoMovimentacao.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('tipo_movimentacao_id')}
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
                                Anexe quantos arquivos forem preciso, arquivos menores de 5mb
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