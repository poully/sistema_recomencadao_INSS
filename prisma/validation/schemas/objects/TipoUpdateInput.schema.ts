import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BeneficioUpdateManyWithoutTipoNestedInputObjectSchema } from './BeneficioUpdateManyWithoutTipoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoUpdateInput> = z
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
      .lazy(() => BeneficioUpdateManyWithoutTipoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TipoUpdateInputObjectSchema = Schema;
