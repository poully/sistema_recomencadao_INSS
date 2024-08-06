import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficioOrderByRelationAggregateInputObjectSchema } from './BeneficioOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nome: z.lazy(() => SortOrderSchema).optional(),
    beneficio: z
      .lazy(() => BeneficioOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TipoOrderByWithRelationInputObjectSchema = Schema;
