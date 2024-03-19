import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nome: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const EstadoCountAggregateInputObjectSchema = Schema;
