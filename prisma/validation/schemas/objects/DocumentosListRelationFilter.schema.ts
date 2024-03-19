import { z } from 'zod';
import { DocumentosWhereInputObjectSchema } from './DocumentosWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosListRelationFilter> = z
  .object({
    every: z.lazy(() => DocumentosWhereInputObjectSchema).optional(),
    some: z.lazy(() => DocumentosWhereInputObjectSchema).optional(),
    none: z.lazy(() => DocumentosWhereInputObjectSchema).optional(),
  })
  .strict();

export const DocumentosListRelationFilterObjectSchema = Schema;
