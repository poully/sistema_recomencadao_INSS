import { z } from 'zod';
import { BeneficioWhereInputObjectSchema } from './BeneficioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioListRelationFilter> = z
  .object({
    every: z.lazy(() => BeneficioWhereInputObjectSchema).optional(),
    some: z.lazy(() => BeneficioWhereInputObjectSchema).optional(),
    none: z.lazy(() => BeneficioWhereInputObjectSchema).optional(),
  })
  .strict();

export const BeneficioListRelationFilterObjectSchema = Schema;
