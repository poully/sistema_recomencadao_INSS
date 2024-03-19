import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInput> =
  z
    .object({
      id: z.number(),
      beneficio_id: z.number(),
    })
    .strict();

export const MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
