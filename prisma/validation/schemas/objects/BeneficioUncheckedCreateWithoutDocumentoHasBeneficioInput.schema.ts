import { z } from 'zod';
import { AuxilioMaternidadeUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      id: z.number().optional(),
      status: z.string(),
      AuxilioMaternidade: z
        .lazy(
          () =>
            AuxilioMaternidadeUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
