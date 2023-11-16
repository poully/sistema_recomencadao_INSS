import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManyInput> = z
  .object({
    id: z.number().optional(),
    status: z.string(),
  })
  .strict();

export const BeneficioCreateManyInputObjectSchema = Schema;
