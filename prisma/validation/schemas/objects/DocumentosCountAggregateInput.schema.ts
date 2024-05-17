import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    descricao: z.literal(true).optional(),
    conteudo: z.literal(true).optional(),
    extensao: z.literal(true).optional(),
    beneficio_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const DocumentosCountAggregateInputObjectSchema = Schema;
