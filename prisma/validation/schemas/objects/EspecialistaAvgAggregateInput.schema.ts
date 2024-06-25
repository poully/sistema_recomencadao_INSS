import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    cidade_ibge_id: z.literal(true).optional(),
  })
  .strict();

export const EspecialistaAvgAggregateInputObjectSchema = Schema;
