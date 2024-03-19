import { z } from 'zod';
import { CidadeWhereInputObjectSchema } from './CidadeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeRelationFilter> = z
  .object({
    is: z
      .lazy(() => CidadeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CidadeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CidadeRelationFilterObjectSchema = Schema;
