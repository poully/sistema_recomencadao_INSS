import { Box, Button, Checkbox, Group, NumberInput, TextInput, FileButton, FileInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { useRef, useState } from 'react';
import { z } from 'zod';
import { zodI18nMap } from "zod-i18n-map";
import { differenceInDays, differenceInYears, differenceInMonths } from 'date-fns';
import { Dropzone } from '@mantine/dropzone';
import { useCreateAuxilioMaternidade } from '@/src/api-client/useCreateAuxilioMaternidade';

const diasDeIntervalo = 0;

const CustomMessages = {
  dataSaida: 'Não está no período segurado, por favor dirija-se até o SINE para garantir mais prazo como segurado',
  criancaMaior: 'Não há direito pois a criança já tem mais de 05(cinco) anos de idade.',
  contribuicaoMinima: 'Contribuição mínima inferior há 10 meses, não tem direito.',
}
z.setErrorMap(zodI18nMap);
const schema = z.object({
  nomeMae: z.string().min(10, { message: 'digite o nome da mãe completo' }),
  dataSaidaEmprego: z.coerce.date().nullable().refine((date) => !date || differenceInDays(new Date(), date) < 442, { message: CustomMessages.dataSaida }),
  dataNascimentoBebe: z.date().optional().refine((date) => !date || differenceInYears(new Date(), date) < 5, { message: CustomMessages.criancaMaior }),
  matriculaCertidao: z.string().optional().nullable(),
  dataRegistro: z.date().optional().nullable(),
  contribuinteIndividual: z.boolean().optional(),
  dataContribuicao: z.date().optional().nullable(),
  rua: z.string().min(5, { message: 'Informe a rua' }),
  numero: z.coerce.number().min(1, 'Informe o número da casa'),
  bairro: z.string().min(5, { message: 'Informe o bairro' }),
  cep: z.coerce.string().min(1, { message: 'Informe o CEP' }),
}).refine((val) => {
  if (!val?.contribuinteIndividual && val?.dataContribuicao != null) {
    const difference = differenceInMonths(new Date(), val.dataContribuicao);
    return difference < 10;
  }
  return true;
}, { message: CustomMessages.contribuicaoMinima });
function Home() {
  const { mutate, isPending } = useCreateAuxilioMaternidade();
  const [files, setFiles] = useState<File[]>([]);
  const openRef = useRef<() => void>(null);
  const form = useForm({
    initialValues: {
      nomeMae: "",
      dataSaidaEmprego: "",
      dataNascimentoBebe: new Date(),
      matriculaCertidao: "",
      dataRegistro: new Date(),
      contribuinteIndividual: false,
      dataContribuicao: new Date(),
      rua: "",
      numero: "",
      bairro: "",
      cep: "",
    },
    validate: zodResolver(schema),
  });


  return (
    <Box maw={340} mx="auto" >
      <form onSubmit={form.onSubmit((values) => mutate({ ...values, files } as any))}>
        <TextInput
          withAsterisk
          label="Nome da mãe"
          placeholder=""
          {...form.getInputProps('nomeMae')}
        />
        <DatePickerInput
          withAsterisk
          valueFormat="DD MMM YYYY"
          label="Data de saida do emprego"
          placeholder="data de saida do emprego"
          {...form.getInputProps('dataSaidaEmprego')}
        />
        <DatePickerInput
          valueFormat="DD MMM YYYY"
          label="Data de nascimento do bebe"
          placeholder="data de nascimento do bebe"
          {...form.getInputProps('dataNascimentoBebe')}
        />
        <TextInput
          label="Matricula da certidão de nascimento"
          placeholder="Matricula da certidão de nascimento"
          {...form.getInputProps('matriculaCertidao')}
        />
        <DatePickerInput
          valueFormat="DD MMM YYYY"
          label="Data de registro nascimento"
          placeholder="data de registro nascimento"
          {...form.getInputProps('dataRegistro')}
        />
        <Checkbox
          label="Contribuinte individual"
          placeholder="contribuinte individual"
          {...form.getInputProps('contribuinteIndividual', { type: 'checkbox' })}
        />
        {form.values?.contribuinteIndividual ? (
          <DatePickerInput
            valueFormat="DD MMM YYYY"
            withAsterisk
            label="Data de contribuição"
            placeholder="data de contribuição"
            {...form.getInputProps('dataContribuicao')} />
        ) : null}

        <TextInput
          withAsterisk
          label="Rua"
          placeholder="rua"
          {...form.getInputProps('rua')}
        />
        <NumberInput hideControls
          withAsterisk
          label="Número"
          placeholder="Número"
          {...form.getInputProps('numero')}
        />
        <TextInput
          withAsterisk
          label="Bairro"
          placeholder="bairro"
          {...form.getInputProps('bairro')}
        />
        <NumberInput hideControls
          withAsterisk
          label="CEP"
          placeholder="cep"
          {...form.getInputProps('cep')}
        />
        {/* <FileInput
          label="Insira a imagem do documento"
          placeholder="documento"
          {...form.getInputProps('documento')}
        /> */}
        {/* <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload documento</Button>}
        </FileButton> */}


        <Dropzone openRef={openRef} onDrop={setFiles} activateOnClick={false}>
          <Group justify="center">
            <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
              Selecionar documentos
            </Button>
          </Group>
        </Dropzone>

        {/* <FileInput
          label="Insira o comprovante de residencia"
          placeholder="comprovante de residencia"
          {...form.getInputProps('documento')}
        />
        
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload comprovante</Button>}
        </FileButton> */}

        <Group justify="flex-end" mt="md">
          <Button type="submit" loading={isPending}>Enviar</Button>
        </Group>
      </form>
    </Box >
  );
}

export default Home;