import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MovimentacaoUpdateManyWithoutTipo_movimentacaoNestedInputObjectSchema } from './MovimentacaoUpdateManyWithoutTipo_movimentacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
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
          MovimentacaoUpdateManyWithoutTipo_movimentacaoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TipoMovimentacaoUpdateInputObjectSchema = Schema;
