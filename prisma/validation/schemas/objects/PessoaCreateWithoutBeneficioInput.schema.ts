import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateWithoutBeneficioInput> = z
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
  })
  .strict();

export const PessoaCreateWithoutBeneficioInputObjectSchema = Schema;
