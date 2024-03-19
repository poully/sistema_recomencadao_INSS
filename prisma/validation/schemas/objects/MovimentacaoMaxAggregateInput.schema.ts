import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    beneficio_id: z.literal(true).optional(),
    tipo_movimentacao_id: z.literal(true).optional(),
  })
  .strict();

export const MovimentacaoMaxAggregateInputObjectSchema = Schema;
