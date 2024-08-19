import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovimentacaoScalarWhereInputObjectSchema),
        z.lazy(() => MovimentacaoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MovimentacaoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovimentacaoScalarWhereInputObjectSchema),
        z.lazy(() => MovimentacaoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    tipo_movimentacao_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    beneficio_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const MovimentacaoScalarWhereInputObjectSchema = Schema;
