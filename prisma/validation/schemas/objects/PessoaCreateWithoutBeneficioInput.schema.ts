import { z } from 'zod';
import { CidadeCreateNestedOneWithoutPessoaInputObjectSchema } from './CidadeCreateNestedOneWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateWithoutBeneficioInput> = z
  .object({
    nome: z.string(),
    email: z.string(),
    endereco: z.string(),
    telefone: z.string(),
    data_nasc: z.coerce.date(),
    cpf: z.string(),
    cnis: z.string(),
    cidade: z.lazy(() => CidadeCreateNestedOneWithoutPessoaInputObjectSchema),
  })
  .strict();

export const PessoaCreateWithoutBeneficioInputObjectSchema = Schema;
