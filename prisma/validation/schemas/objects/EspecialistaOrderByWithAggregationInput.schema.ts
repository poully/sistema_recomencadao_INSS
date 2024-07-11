import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EspecialistaCountOrderByAggregateInputObjectSchema } from './EspecialistaCountOrderByAggregateInput.schema';
import { EspecialistaMaxOrderByAggregateInputObjectSchema } from './EspecialistaMaxOrderByAggregateInput.schema';
import { EspecialistaMinOrderByAggregateInputObjectSchema } from './EspecialistaMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    telefone: z.lazy(() => SortOrderSchema).optional(),
    endereco: z.lazy(() => SortOrderSchema).optional(),
    cidade: z.lazy(() => SortOrderSchema).optional(),
    uf: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EspecialistaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => EspecialistaMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => EspecialistaMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EspecialistaOrderByWithAggregationInputObjectSchema = Schema;
