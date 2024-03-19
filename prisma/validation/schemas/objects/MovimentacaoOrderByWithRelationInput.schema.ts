import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BeneficioOrderByWithRelationInputObjectSchema } from './BeneficioOrderByWithRelationInput.schema';
import { TipoMovimentacaoOrderByWithRelationInputObjectSchema } from './TipoMovimentacaoOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    beneficio_id: z.lazy(() => SortOrderSchema).optional(),
    tipo_movimentacao_id: z.lazy(() => SortOrderSchema).optional(),
    beneficio: z
      .lazy(() => BeneficioOrderByWithRelationInputObjectSchema)
      .optional(),
    tipo_movimentacao: z
      .lazy(() => TipoMovimentacaoOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const MovimentacaoOrderByWithRelationInputObjectSchema = Schema;
