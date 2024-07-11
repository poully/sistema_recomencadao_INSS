import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DocumentosCountOrderByAggregateInputObjectSchema } from './DocumentosCountOrderByAggregateInput.schema';
import { DocumentosMaxOrderByAggregateInputObjectSchema } from './DocumentosMaxOrderByAggregateInput.schema';
import { DocumentosMinOrderByAggregateInputObjectSchema } from './DocumentosMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    descricao: z.lazy(() => SortOrderSchema).optional(),
    imagem: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DocumentosCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DocumentosMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DocumentosMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DocumentosOrderByWithAggregationInputObjectSchema = Schema;
