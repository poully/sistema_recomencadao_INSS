import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema } from './BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInput.schema';
import { TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema } from './TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    beneficio: z
      .lazy(
        () =>
          BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema,
      )
      .optional(),
    tipo_movimentacao: z
      .lazy(
        () =>
          TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MovimentacaoUpdateInputObjectSchema = Schema;
