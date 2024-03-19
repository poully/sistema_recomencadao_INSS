import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EstadoOrderByWithRelationInputObjectSchema } from './EstadoOrderByWithRelationInput.schema';
import { PessoaOrderByRelationAggregateInputObjectSchema } from './PessoaOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    estado_id: z.lazy(() => SortOrderSchema).optional(),
    estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
    Pessoa: z
      .lazy(() => PessoaOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeOrderByWithRelationInputObjectSchema = Schema;
