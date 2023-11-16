import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AuxilioMaternidadeUpdateManyWithoutBeneficioNestedInputObjectSchema } from './AuxilioMaternidadeUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      status: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      AuxilioMaternidade: z
        .lazy(
          () =>
            AuxilioMaternidadeUpdateManyWithoutBeneficioNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioUpdateWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
