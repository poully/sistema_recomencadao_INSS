import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    status: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BeneficioCountAggregateInputObjectSchema = Schema;
