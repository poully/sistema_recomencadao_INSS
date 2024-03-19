import { z } from 'zod';
import { BeneficioUncheckedCreateNestedManyWithoutPessoaInputObjectSchema } from './BeneficioUncheckedCreateNestedManyWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUncheckedCreateWithoutCidadeInput> = z
  .object({
    id: z.number().optional(),
    nome: z.string(),
    email: z.string(),
    endereco: z.string(),
    telefone: z.string(),
    data_nasc: z.coerce.date(),
    cpf: z.string(),
    cnis: z.string(),
    Beneficio: z
      .lazy(
        () => BeneficioUncheckedCreateNestedManyWithoutPessoaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PessoaUncheckedCreateWithoutCidadeInputObjectSchema = Schema;
