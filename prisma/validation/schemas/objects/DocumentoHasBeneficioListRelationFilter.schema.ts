import { z } from 'zod';
import { DocumentoHasBeneficioWhereInputObjectSchema } from './DocumentoHasBeneficioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioListRelationFilter> = z
  .object({
    every: z.lazy(() => DocumentoHasBeneficioWhereInputObjectSchema).optional(),
    some: z.lazy(() => DocumentoHasBeneficioWhereInputObjectSchema).optional(),
    none: z.lazy(() => DocumentoHasBeneficioWhereInputObjectSchema).optional(),
  })
  .strict();

export const DocumentoHasBeneficioListRelationFilterObjectSchema = Schema;
