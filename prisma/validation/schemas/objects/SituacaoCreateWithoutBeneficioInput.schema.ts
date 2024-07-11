import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoCreateWithoutBeneficioInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
  })
  .strict();

export const SituacaoCreateWithoutBeneficioInputObjectSchema = Schema;
