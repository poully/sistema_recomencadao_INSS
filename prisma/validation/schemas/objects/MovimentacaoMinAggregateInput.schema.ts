import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    beneficio_id: z.literal(true).optional(),
    tipo_movimentacao_id: z.literal(true).optional(),
  })
  .strict();

export const MovimentacaoMinAggregateInputObjectSchema = Schema;
