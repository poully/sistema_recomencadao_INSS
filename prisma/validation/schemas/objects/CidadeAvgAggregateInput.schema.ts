import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    estado_id: z.literal(true).optional(),
  })
  .strict();

export const CidadeAvgAggregateInputObjectSchema = Schema;
