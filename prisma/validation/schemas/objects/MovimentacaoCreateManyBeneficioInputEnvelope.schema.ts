import { z } from 'zod';
import { MovimentacaoCreateManyBeneficioInputObjectSchema } from './MovimentacaoCreateManyBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateManyBeneficioInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MovimentacaoCreateManyBeneficioInputObjectSchema),
      z.lazy(() => MovimentacaoCreateManyBeneficioInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MovimentacaoCreateManyBeneficioInputEnvelopeObjectSchema = Schema;
