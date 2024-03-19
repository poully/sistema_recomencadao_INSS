import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovimentacaoCountOrderByAggregateInputObjectSchema } from './MovimentacaoCountOrderByAggregateInput.schema';
import { MovimentacaoAvgOrderByAggregateInputObjectSchema } from './MovimentacaoAvgOrderByAggregateInput.schema';
import { MovimentacaoMaxOrderByAggregateInputObjectSchema } from './MovimentacaoMaxOrderByAggregateInput.schema';
import { MovimentacaoMinOrderByAggregateInputObjectSchema } from './MovimentacaoMinOrderByAggregateInput.schema';
import { MovimentacaoSumOrderByAggregateInputObjectSchema } from './MovimentacaoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    tipo_movimentacao_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MovimentacaoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MovimentacaoAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MovimentacaoMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MovimentacaoMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MovimentacaoSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MovimentacaoOrderByWithAggregationInputObjectSchema = Schema;
