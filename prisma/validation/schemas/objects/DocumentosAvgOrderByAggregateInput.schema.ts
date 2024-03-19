import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DocumentosAvgOrderByAggregateInputObjectSchema = Schema;
