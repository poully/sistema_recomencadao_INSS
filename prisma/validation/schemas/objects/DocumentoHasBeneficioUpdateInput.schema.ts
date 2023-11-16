import { z } from 'zod';
import { DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema } from './DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInput.schema';
import { BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema } from './BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpdateInput> = z
  .object({
    documento: z
      .lazy(
        () =>
          DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema,
      )
      .optional(),
    beneficio: z
      .lazy(
        () =>
          BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentoHasBeneficioUpdateInputObjectSchema = Schema;
