import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PessoaUpdateManyWithoutCidadeNestedInputObjectSchema } from './PessoaUpdateManyWithoutCidadeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUpdateWithoutEstadoInput> = z
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
    Pessoa: z
      .lazy(() => PessoaUpdateManyWithoutCidadeNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeUpdateWithoutEstadoInputObjectSchema = Schema;
