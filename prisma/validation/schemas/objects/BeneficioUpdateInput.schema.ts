import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AuxilioMaternidadeUpdateManyWithoutBeneficioNestedInputObjectSchema } from './AuxilioMaternidadeUpdateManyWithoutBeneficioNestedInput.schema';
import { DocumentoHasBeneficioUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentoHasBeneficioUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateInput> = z
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
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioUpdateManyWithoutBeneficioNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioUpdateInputObjectSchema = Schema;
