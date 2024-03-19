import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DocumentosUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema } from './DocumentosUncheckedUpdateManyWithoutBeneficioNestedInput.schema';
import { MovimentacaoUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema } from './MovimentacaoUncheckedUpdateManyWithoutBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedUpdateWithoutSituacaoInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    numero_beneficio: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pessoa_id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tipo_id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    especialista_id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Documentos: z
      .lazy(
        () =>
          DocumentosUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema,
      )
      .optional(),
    Movimentacao: z
      .lazy(
        () =>
          MovimentacaoUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioUncheckedUpdateWithoutSituacaoInputObjectSchema = Schema;
