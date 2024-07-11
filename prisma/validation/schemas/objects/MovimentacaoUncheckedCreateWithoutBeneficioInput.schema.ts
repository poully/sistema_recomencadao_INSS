import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUncheckedCreateWithoutBeneficioInput> =
  z
    .object({
      id: z.string().optional(),
      tipo_movimentacao_id: z.string(),
    })
    .strict();

export const MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema =
  Schema;
