import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BeneficioRelationFilterObjectSchema } from './BeneficioRelationFilter.schema';
import { BeneficioWhereInputObjectSchema } from './BeneficioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DocumentosWhereInputObjectSchema),
        z.lazy(() => DocumentosWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DocumentosWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DocumentosWhereInputObjectSchema),
        z.lazy(() => DocumentosWhereInputObjectSchema).array(),
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
    beneficio: z
      .union([
        z.lazy(() => BeneficioRelationFilterObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DocumentosWhereInputObjectSchema = Schema;
