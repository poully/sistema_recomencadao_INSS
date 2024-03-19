import { z } from 'zod';
import { BeneficioCreateManyPessoaInputObjectSchema } from './BeneficioCreateManyPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManyPessoaInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BeneficioCreateManyPessoaInputObjectSchema),
      z.lazy(() => BeneficioCreateManyPessoaInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BeneficioCreateManyPessoaInputEnvelopeObjectSchema = Schema;
