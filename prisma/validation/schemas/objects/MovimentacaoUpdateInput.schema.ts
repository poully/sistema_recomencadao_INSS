import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema } from './BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInput.schema';
import { TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema } from './TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
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
