import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DocumentoHasBeneficioListRelationFilterObjectSchema } from './DocumentoHasBeneficioListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DocumentoWhereInputObjectSchema),
        z.lazy(() => DocumentoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DocumentoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DocumentoWhereInputObjectSchema),
        z.lazy(() => DocumentoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    registro: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    comprovanteResidencia: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    comprovanteRenda: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    caminho: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(() => DocumentoHasBeneficioListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const DocumentoWhereInputObjectSchema = Schema;
