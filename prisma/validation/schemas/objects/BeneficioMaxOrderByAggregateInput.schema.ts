import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    numero_beneficio: z.lazy(() => SortOrderSchema).optional(),
    situacao_id: z.lazy(() => SortOrderSchema).optional(),
    pessoa_id: z.lazy(() => SortOrderSchema).optional(),
    tipo_id: z.lazy(() => SortOrderSchema).optional(),
    especialista_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BeneficioMaxOrderByAggregateInputObjectSchema = Schema;
