import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DocumentoHasBeneficioUpdateManyWithoutDocumentoNestedInputObjectSchema } from './DocumentoHasBeneficioUpdateManyWithoutDocumentoNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoUpdateInput> = z
  .object({
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
    caminho: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioUpdateManyWithoutDocumentoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentoUpdateInputObjectSchema = Schema;
