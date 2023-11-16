import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    registro: z.literal(true).optional(),
  })
  .strict();

export const DocumentoSumAggregateInputObjectSchema = Schema;
