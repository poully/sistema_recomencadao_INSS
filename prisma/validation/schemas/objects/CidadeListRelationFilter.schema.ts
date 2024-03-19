import { z } from 'zod';
import { CidadeWhereInputObjectSchema } from './CidadeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeListRelationFilter> = z
  .object({
    every: z.lazy(() => CidadeWhereInputObjectSchema).optional(),
    some: z.lazy(() => CidadeWhereInputObjectSchema).optional(),
    none: z.lazy(() => CidadeWhereInputObjectSchema).optional(),
  })
  .strict();

export const CidadeListRelationFilterObjectSchema = Schema;
