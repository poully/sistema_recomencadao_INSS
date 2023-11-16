import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    numero: z.lazy(() => SortOrderSchema).optional(),
    cep: z.lazy(() => SortOrderSchema).optional(),
    beneficioId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AuxilioMaternidadeSumOrderByAggregateInputObjectSchema = Schema;
