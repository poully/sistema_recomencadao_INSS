import { z } from 'zod';
import { BeneficioCreateNestedManyWithoutPessoaInputObjectSchema } from './BeneficioCreateNestedManyWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateInput> = z
  .object({
    nome: z.string(),
    email: z.string(),
    endereco: z.string(),
    telefone: z.string(),
    data_nasc: z.coerce.date(),
    cpf: z.string(),
    cnis: z.string(),
    cidade_ibge_id: z.number(),
    Beneficio: z
      .lazy(() => BeneficioCreateNestedManyWithoutPessoaInputObjectSchema)
      .optional(),
  })
  .strict();

export const PessoaCreateInputObjectSchema = Schema;
