import { z } from 'zod';
import { BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema } from './BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpdateWithoutDocumentoInput> =
  z
    .object({
      beneficio: z
        .lazy(
          () =>
            BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const DocumentoHasBeneficioUpdateWithoutDocumentoInputObjectSchema =
  Schema;
