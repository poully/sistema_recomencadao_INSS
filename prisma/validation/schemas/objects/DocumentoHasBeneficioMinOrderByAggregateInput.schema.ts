import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioMinOrderByAggregateInput> =
  z
    .object({
      documento_id: z.lazy(() => SortOrderSchema).optional(),
      beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DocumentoHasBeneficioMinOrderByAggregateInputObjectSchema = Schema;
