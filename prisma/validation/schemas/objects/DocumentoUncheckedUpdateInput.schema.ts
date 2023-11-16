import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoNestedInputObjectSchema } from './DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    registro: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comprovanteResidencia: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comprovanteRenda: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentoUncheckedUpdateInputObjectSchema = Schema;
