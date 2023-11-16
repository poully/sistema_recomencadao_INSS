import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { AuxilioMaternidadeListRelationFilterObjectSchema } from './AuxilioMaternidadeListRelationFilter.schema';
import { DocumentoHasBeneficioListRelationFilterObjectSchema } from './DocumentoHasBeneficioListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BeneficioWhereInputObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BeneficioWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BeneficioWhereInputObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    status: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    AuxilioMaternidade: z
      .lazy(() => AuxilioMaternidadeListRelationFilterObjectSchema)
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(() => DocumentoHasBeneficioListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioWhereInputObjectSchema = Schema;
