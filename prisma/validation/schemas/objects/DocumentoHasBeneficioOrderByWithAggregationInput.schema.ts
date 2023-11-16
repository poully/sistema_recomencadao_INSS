import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DocumentoHasBeneficioCountOrderByAggregateInputObjectSchema } from './DocumentoHasBeneficioCountOrderByAggregateInput.schema';
import { DocumentoHasBeneficioAvgOrderByAggregateInputObjectSchema } from './DocumentoHasBeneficioAvgOrderByAggregateInput.schema';
import { DocumentoHasBeneficioMaxOrderByAggregateInputObjectSchema } from './DocumentoHasBeneficioMaxOrderByAggregateInput.schema';
import { DocumentoHasBeneficioMinOrderByAggregateInputObjectSchema } from './DocumentoHasBeneficioMinOrderByAggregateInput.schema';
import { DocumentoHasBeneficioSumOrderByAggregateInputObjectSchema } from './DocumentoHasBeneficioSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioOrderByWithAggregationInput> =
  z
    .object({
      documento_id: z.lazy(() => SortOrderSchema).optional(),
      beneficio_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => DocumentoHasBeneficioCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => DocumentoHasBeneficioAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => DocumentoHasBeneficioMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => DocumentoHasBeneficioMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => DocumentoHasBeneficioSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const DocumentoHasBeneficioOrderByWithAggregationInputObjectSchema =
  Schema;
