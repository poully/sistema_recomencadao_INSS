import { z } from 'zod';
import { BeneficioCreateNestedManyWithoutPessoaInputObjectSchema } from './BeneficioCreateNestedManyWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
    email: z.string(),
    endereco: z.string(),
    telefone: z.string(),
    data_nasc: z.coerce.date(),
    cpf: z.string(),
    cnis: z.string(),
    cidade: z.string(),
    uf: z.string(),
    Beneficio: z
      .lazy(() => BeneficioCreateNestedManyWithoutPessoaInputObjectSchema)
      .optional(),
  })
  .strict();

export const PessoaCreateInputObjectSchema = Schema;
