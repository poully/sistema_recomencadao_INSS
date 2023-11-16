import { z } from 'zod';
import { DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateWithoutAuxilioMaternidadeInput> =
  z
    .object({
      id: z.number().optional(),
      status: z.string(),
      DocumentoHasBeneficio: z
        .lazy(
          () =>
            DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema =
  Schema;
