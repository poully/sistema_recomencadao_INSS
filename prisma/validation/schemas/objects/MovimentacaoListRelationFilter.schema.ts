import { z } from 'zod';
import { MovimentacaoWhereInputObjectSchema } from './MovimentacaoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoListRelationFilter> = z
  .object({
    every: z.lazy(() => MovimentacaoWhereInputObjectSchema).optional(),
    some: z.lazy(() => MovimentacaoWhereInputObjectSchema).optional(),
    none: z.lazy(() => MovimentacaoWhereInputObjectSchema).optional(),
  })
  .strict();

export const MovimentacaoListRelationFilterObjectSchema = Schema;
