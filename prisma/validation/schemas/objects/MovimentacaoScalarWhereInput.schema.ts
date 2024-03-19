import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

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
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    beneficio_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tipo_movimentacao_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const MovimentacaoScalarWhereInputObjectSchema = Schema;
