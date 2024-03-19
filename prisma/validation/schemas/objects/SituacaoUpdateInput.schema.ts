import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BeneficioUpdateManyWithoutSituacaoNestedInputObjectSchema } from './BeneficioUpdateManyWithoutSituacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoUpdateInput> = z
  .object({
    nome: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Beneficio: z
      .lazy(() => BeneficioUpdateManyWithoutSituacaoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SituacaoUpdateInputObjectSchema = Schema;
