import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    registro: z.literal(true).optional(),
    comprovanteResidencia: z.literal(true).optional(),
    comprovanteRenda: z.literal(true).optional(),
  })
  .strict();

export const DocumentoMaxAggregateInputObjectSchema = Schema;
