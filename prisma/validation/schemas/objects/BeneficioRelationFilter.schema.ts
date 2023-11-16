import { z } from 'zod';
import { BeneficioWhereInputObjectSchema } from './BeneficioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioRelationFilter> = z
  .object({
    is: z
      .lazy(() => BeneficioWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BeneficioWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BeneficioRelationFilterObjectSchema = Schema;
