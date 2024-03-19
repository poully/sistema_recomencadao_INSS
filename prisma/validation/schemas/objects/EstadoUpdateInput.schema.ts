import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CidadeUpdateManyWithoutEstadoNestedInputObjectSchema } from './CidadeUpdateManyWithoutEstadoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoUpdateInput> = z
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
      .lazy(() => CidadeUpdateManyWithoutEstadoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const EstadoUpdateInputObjectSchema = Schema;
