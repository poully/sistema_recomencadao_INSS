import { z } from 'zod';
import { AuxilioMaternidadeCreateNestedManyWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateNestedManyWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioCreateNestedManyWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateNestedManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateInput> = z
  .object({
    status: z.string(),
    AuxilioMaternidade: z
      .lazy(
        () =>
          AuxilioMaternidadeCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioCreateNestedManyWithoutBeneficioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BeneficioCreateInputObjectSchema = Schema;
