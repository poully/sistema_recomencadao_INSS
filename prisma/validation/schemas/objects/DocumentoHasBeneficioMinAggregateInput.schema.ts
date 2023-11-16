import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioMinAggregateInputType> = z
  .object({
    documento_id: z.literal(true).optional(),
    beneficio_id: z.literal(true).optional(),
  })
  .strict();

export const DocumentoHasBeneficioMinAggregateInputObjectSchema = Schema;
