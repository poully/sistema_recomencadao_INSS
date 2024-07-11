import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DocumentosUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentosUncheckedUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedUpdateWithoutMovimentacaoInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      numero_beneficio: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      situacao_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      pessoa_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      tipo_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      especialista_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      Documentos: z
        .lazy(
          () =>
            DocumentosUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioUncheckedUpdateWithoutMovimentacaoInputObjectSchema =
  Schema;
