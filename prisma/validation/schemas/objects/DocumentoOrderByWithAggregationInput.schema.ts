import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DocumentoCountOrderByAggregateInputObjectSchema } from './DocumentoCountOrderByAggregateInput.schema';
import { DocumentoAvgOrderByAggregateInputObjectSchema } from './DocumentoAvgOrderByAggregateInput.schema';
import { DocumentoMaxOrderByAggregateInputObjectSchema } from './DocumentoMaxOrderByAggregateInput.schema';
import { DocumentoMinOrderByAggregateInputObjectSchema } from './DocumentoMinOrderByAggregateInput.schema';
import { DocumentoSumOrderByAggregateInputObjectSchema } from './DocumentoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    registro: z.lazy(() => SortOrderSchema).optional(),
    comprovanteResidencia: z.lazy(() => SortOrderSchema).optional(),
    comprovanteRenda: z.lazy(() => SortOrderSchema).optional(),
    caminho: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DocumentoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => DocumentoAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DocumentoMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DocumentoMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => DocumentoSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DocumentoOrderByWithAggregationInputObjectSchema = Schema;
