import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MovimentacaoUncheckedUpdateManyWithoutTipo_movimentacaoNestedInputObjectSchema } from './MovimentacaoUncheckedUpdateManyWithoutTipo_movimentacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nome: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Movimentacao: z
      .lazy(
        () =>
          MovimentacaoUncheckedUpdateManyWithoutTipo_movimentacaoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TipoMovimentacaoUncheckedUpdateInputObjectSchema = Schema;
