import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficioOrderByWithRelationInputObjectSchema } from './BeneficioOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    descricao: z.lazy(() => SortOrderSchema).optional(),
    imagem: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    beneficio: z
      .lazy(() => BeneficioOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const DocumentosOrderByWithRelationInputObjectSchema = Schema;
