import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficioCountOrderByAggregateInputObjectSchema } from './BeneficioCountOrderByAggregateInput.schema';
import { BeneficioAvgOrderByAggregateInputObjectSchema } from './BeneficioAvgOrderByAggregateInput.schema';
import { BeneficioMaxOrderByAggregateInputObjectSchema } from './BeneficioMaxOrderByAggregateInput.schema';
import { BeneficioMinOrderByAggregateInputObjectSchema } from './BeneficioMinOrderByAggregateInput.schema';
import { BeneficioSumOrderByAggregateInputObjectSchema } from './BeneficioSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    numero_beneficio: z.lazy(() => SortOrderSchema).optional(),
    situacao_id: z.lazy(() => SortOrderSchema).optional(),
    pessoa_id: z.lazy(() => SortOrderSchema).optional(),
    tipo_id: z.lazy(() => SortOrderSchema).optional(),
    especialista_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BeneficioCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => BeneficioAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BeneficioMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BeneficioMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => BeneficioSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioOrderByWithAggregationInputObjectSchema = Schema;
