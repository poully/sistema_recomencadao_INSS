import { z } from 'zod';
import { BeneficioCreateManyEspecialistaInputObjectSchema } from './BeneficioCreateManyEspecialistaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManyEspecialistaInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BeneficioCreateManyEspecialistaInputObjectSchema),
      z.lazy(() => BeneficioCreateManyEspecialistaInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BeneficioCreateManyEspecialistaInputEnvelopeObjectSchema = Schema;
