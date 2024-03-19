import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CidadeCountOrderByAggregateInputObjectSchema } from './CidadeCountOrderByAggregateInput.schema';
import { CidadeAvgOrderByAggregateInputObjectSchema } from './CidadeAvgOrderByAggregateInput.schema';
import { CidadeMaxOrderByAggregateInputObjectSchema } from './CidadeMaxOrderByAggregateInput.schema';
import { CidadeMinOrderByAggregateInputObjectSchema } from './CidadeMinOrderByAggregateInput.schema';
import { CidadeSumOrderByAggregateInputObjectSchema } from './CidadeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    estado_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CidadeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => CidadeAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CidadeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CidadeMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CidadeSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CidadeOrderByWithAggregationInputObjectSchema = Schema;
