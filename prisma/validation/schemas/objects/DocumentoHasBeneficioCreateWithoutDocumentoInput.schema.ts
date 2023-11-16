import { z } from 'zod';
import { BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateWithoutDocumentoInput> =
  z
    .object({
      beneficio: z.lazy(
        () =>
          BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema,
      ),
    })
    .strict();

export const DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema =
  Schema;
