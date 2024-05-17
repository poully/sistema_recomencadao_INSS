import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    descricao: z.lazy(() => SortOrderSchema).optional(),
    conteudo: z.lazy(() => SortOrderSchema).optional(),
    extensao: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DocumentosCountOrderByAggregateInputObjectSchema = Schema;
