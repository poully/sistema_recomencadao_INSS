import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema),
        z.lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema),
        z.lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    documento_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    beneficio_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const DocumentoHasBeneficioScalarWhereInputObjectSchema = Schema;
