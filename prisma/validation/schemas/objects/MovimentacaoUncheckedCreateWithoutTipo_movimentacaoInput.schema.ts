import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInput> =
  z
    .object({
      id: z.string().optional(),
      beneficio_id: z.string(),
    })
    .strict();

export const MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
