import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    registro: z.lazy(() => SortOrderSchema).optional(),
    comprovanteResidencia: z.lazy(() => SortOrderSchema).optional(),
    comprovanteRenda: z.lazy(() => SortOrderSchema).optional(),
    caminho: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DocumentoMinOrderByAggregateInputObjectSchema = Schema;
