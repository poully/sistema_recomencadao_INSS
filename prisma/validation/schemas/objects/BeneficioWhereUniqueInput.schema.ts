import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const BeneficioWhereUniqueInputObjectSchema = Schema;
