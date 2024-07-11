import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TipoCountOrderByAggregateInputObjectSchema } from './TipoCountOrderByAggregateInput.schema';
import { TipoMaxOrderByAggregateInputObjectSchema } from './TipoMaxOrderByAggregateInput.schema';
import { TipoMinOrderByAggregateInputObjectSchema } from './TipoMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => TipoCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TipoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TipoMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TipoOrderByWithAggregationInputObjectSchema = Schema;
