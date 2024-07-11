import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
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
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    nome: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    Movimentacao: z
      .lazy(() => MovimentacaoListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TipoMovimentacaoWhereInputObjectSchema = Schema;
