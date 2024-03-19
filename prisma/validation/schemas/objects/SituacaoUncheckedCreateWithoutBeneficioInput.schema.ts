import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoUncheckedCreateWithoutBeneficioInput> = z
  .object({
    id: z.number().optional(),
    nome: z.string(),
  })
  .strict();

export const SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema = Schema;
