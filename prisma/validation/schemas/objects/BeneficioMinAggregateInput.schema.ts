import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    numero_beneficio: z.literal(true).optional(),
    situacao_id: z.literal(true).optional(),
    pessoa_id: z.literal(true).optional(),
    tipo_id: z.literal(true).optional(),
    especialista_id: z.literal(true).optional(),
  })
  .strict();

export const BeneficioMinAggregateInputObjectSchema = Schema;
