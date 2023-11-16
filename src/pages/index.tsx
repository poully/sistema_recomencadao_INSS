import { Box, Button, Checkbox, Group, NumberInput, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';


const schema = z.object({
  nomeMae: z.string().min(10, { message: 'digite o nome da mãe completo' }),
  dataSaidaEmprego: z.date({ required_error: 'Informe a data de saida.' }),
  dataNascimentoBebe: z.date().optional().nullable(),
  matriculaCertidao: z.string().optional().nullable(),
  dataRegistro: z.date().optional().nullable(),
  contribuinteIndividual: z.boolean().optional(),
  dataContribuicao: z.date().optional().nullable(),
  rua: z.string().min(10, { message: 'Informe a rua' }),
  numero: z.number({ required_error: 'Informe o número da casa' }),
  bairro: z.string({ required_error: "Informe o bairro", }),
  cep: z.number({ required_error: 'Informe o CEP' }),
});


function Home() {
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
      termsOfService: false,
    },

    validate: zodResolver(schema),
  });


  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Nome da Mãe"
          placeholder=""
          {...form.getInputProps('nomeMae')}
        />
        <DatePickerInput
          withAsterisk
          label="Data de Saida do Emprego"
          placeholder="data de saida do emprego"
          {...form.getInputProps('dataSaidaEmprego')}
        />

        dataSaidaEmprego = z.date().refine(new Date() - (dataSaidaEmprego));

        <DatePickerInput
          label="Data de Nascimento do Bebe"
          placeholder="data de nascimento do bebe"
          {...form.getInputProps('dataNascimentoBebe')}
        />
        <TextInput
          label="Matricula da certidão de nascimento"
          placeholder="Matricula da certidão de nascimento"
          {...form.getInputProps('matriculaCertidao')}
        />
        <DatePickerInput
          label="Data de registro nascimento"
          placeholder="data de registro nascimento"
          {...form.getInputProps('dataRegistro')}
        />
        <Checkbox
          label="Contribuinte Individual"
          placeholder="contribuinte individual"
          {...form.getInputProps('contribuinteIndividual', { type: 'checkbox' })}
        />
        {form.values?.contribuinteIndividual ? (
          <DatePickerInput
            withAsterisk
            label="Data de Contribuição"
            placeholder="data de contribuição"
            {...form.getInputProps('dataContribuicao')}
          />) : null}

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
        <Group justify="flex-end" mt="md">
          <Button type="submit">Enviar</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Home;