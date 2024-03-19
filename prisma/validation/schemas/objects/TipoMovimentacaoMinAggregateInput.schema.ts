import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nome: z.literal(true).optional(),
  })
  .strict();

export const TipoMovimentacaoMinAggregateInputObjectSchema = Schema;
