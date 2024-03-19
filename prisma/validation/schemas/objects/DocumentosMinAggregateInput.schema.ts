import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    descricao: z.literal(true).optional(),
    imagem: z.literal(true).optional(),
    beneficio_id: z.literal(true).optional(),
  })
  .strict();

export const DocumentosMinAggregateInputObjectSchema = Schema;
