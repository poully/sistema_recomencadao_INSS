import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nome: z.literal(true).optional(),
    email: z.literal(true).optional(),
    telefone: z.literal(true).optional(),
    endereco: z.literal(true).optional(),
    cidade_ibge_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const EspecialistaCountAggregateInputObjectSchema = Schema;
