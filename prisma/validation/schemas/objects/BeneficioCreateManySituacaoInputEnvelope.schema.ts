import { z } from 'zod';
import { BeneficioCreateManySituacaoInputObjectSchema } from './BeneficioCreateManySituacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManySituacaoInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BeneficioCreateManySituacaoInputObjectSchema),
      z.lazy(() => BeneficioCreateManySituacaoInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BeneficioCreateManySituacaoInputEnvelopeObjectSchema = Schema;
