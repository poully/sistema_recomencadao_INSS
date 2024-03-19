import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoCreateWithoutBeneficioInput> = z
  .object({
    nome: z.string(),
  })
  .strict();

export const SituacaoCreateWithoutBeneficioInputObjectSchema = Schema;
