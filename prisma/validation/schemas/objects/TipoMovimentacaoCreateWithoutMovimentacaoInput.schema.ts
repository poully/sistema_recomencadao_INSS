import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoCreateWithoutMovimentacaoInput> =
  z
    .object({
      id: z.number(),
      nome: z.string(),
    })
    .strict();

export const TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema =
  Schema;
