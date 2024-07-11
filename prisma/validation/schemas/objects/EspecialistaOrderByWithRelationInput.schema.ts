import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficioOrderByRelationAggregateInputObjectSchema } from './BeneficioOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    telefone: z.lazy(() => SortOrderSchema).optional(),
    endereco: z.lazy(() => SortOrderSchema).optional(),
    cidade: z.lazy(() => SortOrderSchema).optional(),
    uf: z.lazy(() => SortOrderSchema).optional(),
    Beneficio: z
      .lazy(() => BeneficioOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EspecialistaOrderByWithRelationInputObjectSchema = Schema;
