import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nome: z.literal(true).optional(),
    estado_id: z.literal(true).optional(),
  })
  .strict();

export const CidadeMaxAggregateInputObjectSchema = Schema;
