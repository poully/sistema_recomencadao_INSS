import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BeneficioScalarWhereInputObjectSchema),
        z.lazy(() => BeneficioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BeneficioScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BeneficioScalarWhereInputObjectSchema),
        z.lazy(() => BeneficioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    numero_beneficio: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    situacao_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    pessoa_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tipo_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    especialista_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const BeneficioScalarWhereInputObjectSchema = Schema;
