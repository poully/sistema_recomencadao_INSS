import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema } from './TipoMovimentacaoUpdateOneRequiredWithoutMovimentacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateWithoutBeneficioInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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
