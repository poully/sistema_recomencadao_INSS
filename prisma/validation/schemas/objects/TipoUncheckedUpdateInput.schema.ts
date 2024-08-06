import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BeneficioUncheckedUpdateManyWithoutTipoNestedInputObjectSchema } from './BeneficioUncheckedUpdateManyWithoutTipoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoUncheckedUpdateInput> = z
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
    beneficio: z
      .lazy(
        () => BeneficioUncheckedUpdateManyWithoutTipoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TipoUncheckedUpdateInputObjectSchema = Schema;
