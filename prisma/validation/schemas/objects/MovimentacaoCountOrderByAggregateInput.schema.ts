import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    tipo_movimentacao_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MovimentacaoCountOrderByAggregateInputObjectSchema = Schema;
