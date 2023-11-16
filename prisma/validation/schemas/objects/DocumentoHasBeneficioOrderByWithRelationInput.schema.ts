import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DocumentoOrderByWithRelationInputObjectSchema } from './DocumentoOrderByWithRelationInput.schema';
import { BeneficioOrderByWithRelationInputObjectSchema } from './BeneficioOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioOrderByWithRelationInput> =
  z
    .object({
      documento_id: z.lazy(() => SortOrderSchema).optional(),
      beneficio_id: z.lazy(() => SortOrderSchema).optional(),
      documento: z
        .lazy(() => DocumentoOrderByWithRelationInputObjectSchema)
        .optional(),
      beneficio: z
        .lazy(() => BeneficioOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();

export const DocumentoHasBeneficioOrderByWithRelationInputObjectSchema = Schema;
