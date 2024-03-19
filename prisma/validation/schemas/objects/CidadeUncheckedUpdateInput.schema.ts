import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PessoaUncheckedUpdateManyWithoutCidadeNestedInputObjectSchema } from './PessoaUncheckedUpdateManyWithoutCidadeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUncheckedUpdateInput> = z
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
    estado_id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Pessoa: z
      .lazy(() => PessoaUncheckedUpdateManyWithoutCidadeNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeUncheckedUpdateInputObjectSchema = Schema;
