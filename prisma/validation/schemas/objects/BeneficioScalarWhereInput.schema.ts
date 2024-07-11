import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
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
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    numero_beneficio: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    situacao_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    pessoa_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    tipo_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    especialista_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const BeneficioScalarWhereInputObjectSchema = Schema;
