import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficioCountOrderByAggregateInputObjectSchema } from './BeneficioCountOrderByAggregateInput.schema';
import { BeneficioMaxOrderByAggregateInputObjectSchema } from './BeneficioMaxOrderByAggregateInput.schema';
import { BeneficioMinOrderByAggregateInputObjectSchema } from './BeneficioMinOrderByAggregateInput.schema';

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
    _max: z
      .lazy(() => BeneficioMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BeneficioMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioOrderByWithAggregationInputObjectSchema = Schema;
