import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TipoMovimentacaoCountOrderByAggregateInputObjectSchema } from './TipoMovimentacaoCountOrderByAggregateInput.schema';
import { TipoMovimentacaoAvgOrderByAggregateInputObjectSchema } from './TipoMovimentacaoAvgOrderByAggregateInput.schema';
import { TipoMovimentacaoMaxOrderByAggregateInputObjectSchema } from './TipoMovimentacaoMaxOrderByAggregateInput.schema';
import { TipoMovimentacaoMinOrderByAggregateInputObjectSchema } from './TipoMovimentacaoMinOrderByAggregateInput.schema';
import { TipoMovimentacaoSumOrderByAggregateInputObjectSchema } from './TipoMovimentacaoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TipoMovimentacaoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TipoMovimentacaoAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TipoMovimentacaoMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TipoMovimentacaoMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TipoMovimentacaoSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TipoMovimentacaoOrderByWithAggregationInputObjectSchema = Schema;
