import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema } from './TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateWithoutBeneficioInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tipo_movimentacao: z
      .lazy(
        () =>
          TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MovimentacaoUpdateWithoutBeneficioInputObjectSchema = Schema;
