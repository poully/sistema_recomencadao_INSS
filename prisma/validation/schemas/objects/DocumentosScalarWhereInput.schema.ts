import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
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
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    descricao: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    conteudo: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    extensao: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneficio_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const DocumentosScalarWhereInputObjectSchema = Schema;
