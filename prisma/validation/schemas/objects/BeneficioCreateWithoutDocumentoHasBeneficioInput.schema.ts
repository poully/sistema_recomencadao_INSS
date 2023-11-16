import { z } from 'zod';
import { AuxilioMaternidadeCreateNestedManyWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      status: z.string(),
      AuxilioMaternidade: z
        .lazy(
          () =>
            AuxilioMaternidadeCreateNestedManyWithoutBeneficioInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BeneficioCreateWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
