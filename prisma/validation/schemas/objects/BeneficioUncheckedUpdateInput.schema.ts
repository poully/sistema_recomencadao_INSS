import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AuxilioMaternidadeUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema } from './AuxilioMaternidadeUncheckedUpdateManyWithoutBeneficioNestedInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentoHasBeneficioUncheckedUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    AuxilioMaternidade: z
      .lazy(
        () =>
          AuxilioMaternidadeUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema,
      )
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioUncheckedUpdateInputObjectSchema = Schema;
