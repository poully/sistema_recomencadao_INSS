import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nome: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TipoMovimentacaoCountAggregateInputObjectSchema = Schema;
