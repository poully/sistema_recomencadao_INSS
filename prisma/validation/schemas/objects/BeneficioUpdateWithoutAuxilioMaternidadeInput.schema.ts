import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DocumentoHasBeneficioUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentoHasBeneficioUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithoutAuxilioMaternidadeInput> =
  z
    .object({
      status: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      DocumentoHasBeneficio: z
        .lazy(
          () =>
            DocumentoHasBeneficioUpdateManyWithoutBeneficioNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioUpdateWithoutAuxilioMaternidadeInputObjectSchema = Schema;
