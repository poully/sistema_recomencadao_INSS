import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    numero: z.literal(true).optional(),
    cep: z.literal(true).optional(),
    beneficioId: z.literal(true).optional(),
  })
  .strict();

export const AuxilioMaternidadeSumAggregateInputObjectSchema = Schema;
