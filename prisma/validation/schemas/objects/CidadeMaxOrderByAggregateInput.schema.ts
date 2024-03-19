import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    estado_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CidadeMaxOrderByAggregateInputObjectSchema = Schema;
