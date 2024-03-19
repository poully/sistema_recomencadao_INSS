import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EstadoUpdateOneRequiredWithoutCidadeNestedInputObjectSchema } from './EstadoUpdateOneRequiredWithoutCidadeNestedInput.schema';
import { PessoaUpdateManyWithoutCidadeNestedInputObjectSchema } from './PessoaUpdateManyWithoutCidadeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUpdateInput> = z
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
    estado: z
      .lazy(() => EstadoUpdateOneRequiredWithoutCidadeNestedInputObjectSchema)
      .optional(),
    Pessoa: z
      .lazy(() => PessoaUpdateManyWithoutCidadeNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeUpdateInputObjectSchema = Schema;
