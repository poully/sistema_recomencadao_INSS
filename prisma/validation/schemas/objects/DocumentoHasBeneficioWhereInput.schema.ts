import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DocumentoRelationFilterObjectSchema } from './DocumentoRelationFilter.schema';
import { DocumentoWhereInputObjectSchema } from './DocumentoWhereInput.schema';
import { BeneficioRelationFilterObjectSchema } from './BeneficioRelationFilter.schema';
import { BeneficioWhereInputObjectSchema } from './BeneficioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DocumentoHasBeneficioWhereInputObjectSchema),
        z.lazy(() => DocumentoHasBeneficioWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DocumentoHasBeneficioWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DocumentoHasBeneficioWhereInputObjectSchema),
        z.lazy(() => DocumentoHasBeneficioWhereInputObjectSchema).array(),
      ])
      .optional(),
    documento_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    beneficio_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    documento: z
      .union([
        z.lazy(() => DocumentoRelationFilterObjectSchema),
        z.lazy(() => DocumentoWhereInputObjectSchema),
      ])
      .optional(),
    beneficio: z
      .union([
        z.lazy(() => BeneficioRelationFilterObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DocumentoHasBeneficioWhereInputObjectSchema = Schema;
