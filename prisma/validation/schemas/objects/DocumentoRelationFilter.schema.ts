import { z } from 'zod';
import { DocumentoWhereInputObjectSchema } from './DocumentoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoRelationFilter> = z
  .object({
    is: z
      .lazy(() => DocumentoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DocumentoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DocumentoRelationFilterObjectSchema = Schema;
