import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    registro: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DocumentoSumOrderByAggregateInputObjectSchema = Schema;
