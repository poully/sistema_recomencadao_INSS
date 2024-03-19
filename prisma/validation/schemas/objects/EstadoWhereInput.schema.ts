import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { CidadeListRelationFilterObjectSchema } from './CidadeListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EstadoWhereInputObjectSchema),
        z.lazy(() => EstadoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EstadoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EstadoWhereInputObjectSchema),
        z.lazy(() => EstadoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nome: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Cidade: z.lazy(() => CidadeListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const EstadoWhereInputObjectSchema = Schema;
