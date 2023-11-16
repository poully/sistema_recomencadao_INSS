import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AuxilioMaternidadeOrderByRelationAggregateInputObjectSchema } from './AuxilioMaternidadeOrderByRelationAggregateInput.schema';
import { DocumentoHasBeneficioOrderByRelationAggregateInputObjectSchema } from './DocumentoHasBeneficioOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    AuxilioMaternidade: z
      .lazy(() => AuxilioMaternidadeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(
        () => DocumentoHasBeneficioOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioOrderByWithRelationInputObjectSchema = Schema;
