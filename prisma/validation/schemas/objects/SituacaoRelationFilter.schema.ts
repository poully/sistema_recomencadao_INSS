import { z } from 'zod';
import { SituacaoWhereInputObjectSchema } from './SituacaoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoRelationFilter> = z
  .object({
    is: z
      .lazy(() => SituacaoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SituacaoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SituacaoRelationFilterObjectSchema = Schema;
