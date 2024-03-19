import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUncheckedCreateWithoutBeneficioInput> =
  z
    .object({
      id: z.number(),
      tipo_movimentacao_id: z.number(),
    })
    .strict();

export const MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema =
  Schema;
