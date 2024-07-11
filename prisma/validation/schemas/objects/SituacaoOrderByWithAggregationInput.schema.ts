import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SituacaoCountOrderByAggregateInputObjectSchema } from './SituacaoCountOrderByAggregateInput.schema';
import { SituacaoMaxOrderByAggregateInputObjectSchema } from './SituacaoMaxOrderByAggregateInput.schema';
import { SituacaoMinOrderByAggregateInputObjectSchema } from './SituacaoMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SituacaoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SituacaoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SituacaoMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SituacaoOrderByWithAggregationInputObjectSchema = Schema;
