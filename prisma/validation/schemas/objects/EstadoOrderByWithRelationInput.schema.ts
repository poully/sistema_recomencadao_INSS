import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CidadeOrderByRelationAggregateInputObjectSchema } from './CidadeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    Cidade: z
      .lazy(() => CidadeOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EstadoOrderByWithRelationInputObjectSchema = Schema;
