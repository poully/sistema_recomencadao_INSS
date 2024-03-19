import { z } from 'zod';
import { DocumentosCreateManyBeneficioInputObjectSchema } from './DocumentosCreateManyBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCreateManyBeneficioInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DocumentosCreateManyBeneficioInputObjectSchema),
      z.lazy(() => DocumentosCreateManyBeneficioInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DocumentosCreateManyBeneficioInputEnvelopeObjectSchema = Schema;
