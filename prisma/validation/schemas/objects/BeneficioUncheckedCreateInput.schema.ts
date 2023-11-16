import { z } from 'zod';
import { AuxilioMaternidadeUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedCreateNestedManyWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    status: z.string(),
    AuxilioMaternidade: z
      .lazy(
        () =>
          AuxilioMaternidadeUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioUncheckedCreateInputObjectSchema = Schema;
