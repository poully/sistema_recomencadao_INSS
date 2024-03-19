import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EstadoCountOrderByAggregateInputObjectSchema } from './EstadoCountOrderByAggregateInput.schema';
import { EstadoAvgOrderByAggregateInputObjectSchema } from './EstadoAvgOrderByAggregateInput.schema';
import { EstadoMaxOrderByAggregateInputObjectSchema } from './EstadoMaxOrderByAggregateInput.schema';
import { EstadoMinOrderByAggregateInputObjectSchema } from './EstadoMinOrderByAggregateInput.schema';
import { EstadoSumOrderByAggregateInputObjectSchema } from './EstadoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EstadoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => EstadoAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => EstadoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EstadoMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => EstadoSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EstadoOrderByWithAggregationInputObjectSchema = Schema;
