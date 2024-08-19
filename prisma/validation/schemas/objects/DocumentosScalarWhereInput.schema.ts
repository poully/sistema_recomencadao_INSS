import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DocumentosScalarWhereInputObjectSchema),
        z.lazy(() => DocumentosScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DocumentosScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DocumentosScalarWhereInputObjectSchema),
        z.lazy(() => DocumentosScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    descricao: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    imagem: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneficio_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const DocumentosScalarWhereInputObjectSchema = Schema;
