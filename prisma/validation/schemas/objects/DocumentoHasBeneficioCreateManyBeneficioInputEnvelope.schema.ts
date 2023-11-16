import { z } from 'zod';
import { DocumentoHasBeneficioCreateManyBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateManyBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateManyBeneficioInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => DocumentoHasBeneficioCreateManyBeneficioInputObjectSchema),
        z
          .lazy(() => DocumentoHasBeneficioCreateManyBeneficioInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const DocumentoHasBeneficioCreateManyBeneficioInputEnvelopeObjectSchema =
  Schema;
