import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BeneficioUncheckedUpdateManyWithoutSituacaoNestedInputObjectSchema } from './BeneficioUncheckedUpdateManyWithoutSituacaoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoUncheckedUpdateInput> = z
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
    Beneficio: z
      .lazy(
        () =>
          BeneficioUncheckedUpdateManyWithoutSituacaoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SituacaoUncheckedUpdateInputObjectSchema = Schema;
