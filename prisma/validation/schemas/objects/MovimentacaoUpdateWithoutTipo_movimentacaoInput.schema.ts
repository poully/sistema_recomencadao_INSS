import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema } from './BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateWithoutTipo_movimentacaoInput> =
  z
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
    })
    .strict();

export const MovimentacaoUpdateWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
