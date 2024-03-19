import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    estado_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CidadeAvgOrderByAggregateInputObjectSchema = Schema;
