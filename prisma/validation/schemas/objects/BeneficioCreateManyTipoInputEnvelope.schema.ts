import { z } from 'zod';
import { BeneficioCreateManyTipoInputObjectSchema } from './BeneficioCreateManyTipoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManyTipoInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BeneficioCreateManyTipoInputObjectSchema),
      z.lazy(() => BeneficioCreateManyTipoInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BeneficioCreateManyTipoInputEnvelopeObjectSchema = Schema;
