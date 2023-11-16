import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DocumentoHasBeneficioOrderByRelationAggregateInputObjectSchema } from './DocumentoHasBeneficioOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    registro: z.lazy(() => SortOrderSchema).optional(),
    comprovanteResidencia: z.lazy(() => SortOrderSchema).optional(),
    comprovanteRenda: z.lazy(() => SortOrderSchema).optional(),
    DocumentoHasBeneficio: z
      .lazy(
        () => DocumentoHasBeneficioOrderByRelationAggregateInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentoOrderByWithRelationInputObjectSchema = Schema;
