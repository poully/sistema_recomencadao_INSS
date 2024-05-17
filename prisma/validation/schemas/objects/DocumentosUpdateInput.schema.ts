import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BeneficioUpdateOneRequiredWithoutDocumentosNestedInputObjectSchema } from './BeneficioUpdateOneRequiredWithoutDocumentosNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUpdateInput> = z
  .object({
    descricao: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    conteudo: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    extensao: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    beneficio: z
      .lazy(
        () =>
          BeneficioUpdateOneRequiredWithoutDocumentosNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentosUpdateInputObjectSchema = Schema;
