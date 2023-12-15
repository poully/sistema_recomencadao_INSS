import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    registro: z.literal(true).optional(),
    comprovanteResidencia: z.literal(true).optional(),
    comprovanteRenda: z.literal(true).optional(),
    caminho: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const DocumentoCountAggregateInputObjectSchema = Schema;
