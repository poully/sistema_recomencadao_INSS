import { z } from 'zod';
import { AuxilioMaternidadeCreateManyBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateManyBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeCreateManyBeneficioInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AuxilioMaternidadeCreateManyBeneficioInputObjectSchema),
        z
          .lazy(() => AuxilioMaternidadeCreateManyBeneficioInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AuxilioMaternidadeCreateManyBeneficioInputEnvelopeObjectSchema =
  Schema;
