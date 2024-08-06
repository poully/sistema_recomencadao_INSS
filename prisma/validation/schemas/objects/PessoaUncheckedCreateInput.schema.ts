import { z } from 'zod';
import { BeneficioUncheckedCreateNestedManyWithoutPessoaInputObjectSchema } from './BeneficioUncheckedCreateNestedManyWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUncheckedCreateInput> = z
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
    beneficio: z
      .lazy(
        () => BeneficioUncheckedCreateNestedManyWithoutPessoaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PessoaUncheckedCreateInputObjectSchema = Schema;
