import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MovimentacaoListRelationFilterObjectSchema } from './MovimentacaoListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TipoMovimentacaoWhereInputObjectSchema),
        z.lazy(() => TipoMovimentacaoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TipoMovimentacaoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TipoMovimentacaoWhereInputObjectSchema),
        z.lazy(() => TipoMovimentacaoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nome: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Movimentacao: z
      .lazy(() => MovimentacaoListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TipoMovimentacaoWhereInputObjectSchema = Schema;
