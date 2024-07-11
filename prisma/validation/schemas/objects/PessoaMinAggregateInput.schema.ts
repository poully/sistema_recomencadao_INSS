import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nome: z.literal(true).optional(),
    email: z.literal(true).optional(),
    endereco: z.literal(true).optional(),
    telefone: z.literal(true).optional(),
    data_nasc: z.literal(true).optional(),
    cpf: z.literal(true).optional(),
    cnis: z.literal(true).optional(),
    cidade: z.literal(true).optional(),
    uf: z.literal(true).optional(),
  })
  .strict();

export const PessoaMinAggregateInputObjectSchema = Schema;
