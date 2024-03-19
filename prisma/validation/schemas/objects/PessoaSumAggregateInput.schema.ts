import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    cidade_id: z.literal(true).optional(),
  })
  .strict();

export const PessoaSumAggregateInputObjectSchema = Schema;
