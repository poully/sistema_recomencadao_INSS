import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    beneficio_id: z.literal(true).optional(),
  })
  .strict();

export const DocumentosAvgAggregateInputObjectSchema = Schema;
