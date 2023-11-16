import { z } from 'zod';
import { DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateWithoutBeneficioInput> =
  z
    .object({
      documento: z.lazy(
        () =>
          DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema,
      ),
    })
    .strict();

export const DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema =
  Schema;
