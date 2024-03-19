import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CidadeUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema } from './CidadeUncheckedUpdateManyWithoutEstadoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoUncheckedUpdateInput> = z
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
    Cidade: z
      .lazy(() => CidadeUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const EstadoUncheckedUpdateInputObjectSchema = Schema;
