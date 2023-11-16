import { z } from 'zod';
import { DocumentoHasBeneficioCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutAuxilioMaternidadeInput> =
  z
    .object({
      status: z.string(),
      DocumentoHasBeneficio: z
        .lazy(
          () =>
            DocumentoHasBeneficioCreateNestedManyWithoutBeneficioInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema = Schema;
