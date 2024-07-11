import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovimentacaoCountOrderByAggregateInputObjectSchema } from './MovimentacaoCountOrderByAggregateInput.schema';
import { MovimentacaoMaxOrderByAggregateInputObjectSchema } from './MovimentacaoMaxOrderByAggregateInput.schema';
import { MovimentacaoMinOrderByAggregateInputObjectSchema } from './MovimentacaoMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    tipo_movimentacao_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MovimentacaoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MovimentacaoMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MovimentacaoMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MovimentacaoOrderByWithAggregationInputObjectSchema = Schema;
