import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioAvgOrderByAggregateInput> =
  z
    .object({
      documento_id: z.lazy(() => SortOrderSchema).optional(),
      beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DocumentoHasBeneficioAvgOrderByAggregateInputObjectSchema = Schema;
