import { z } from 'zod';
import { TipoMovimentacaoWhereInputObjectSchema } from './TipoMovimentacaoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoRelationFilter> = z
  .object({
    is: z
      .lazy(() => TipoMovimentacaoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TipoMovimentacaoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TipoMovimentacaoRelationFilterObjectSchema = Schema;
