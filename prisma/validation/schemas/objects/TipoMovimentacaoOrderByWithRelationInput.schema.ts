import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovimentacaoOrderByRelationAggregateInputObjectSchema } from './MovimentacaoOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    Movimentacao: z
      .lazy(() => MovimentacaoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TipoMovimentacaoOrderByWithRelationInputObjectSchema = Schema;
