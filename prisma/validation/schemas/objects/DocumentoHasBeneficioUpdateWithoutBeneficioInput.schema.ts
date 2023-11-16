import { z } from 'zod';
import { DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema } from './DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpdateWithoutBeneficioInput> =
  z
    .object({
      documento: z
        .lazy(
          () =>
            DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const DocumentoHasBeneficioUpdateWithoutBeneficioInputObjectSchema =
  Schema;
