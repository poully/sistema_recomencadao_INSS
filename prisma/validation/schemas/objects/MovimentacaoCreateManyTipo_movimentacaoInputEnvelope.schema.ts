import { z } from 'zod';
import { MovimentacaoCreateManyTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateManyTipo_movimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateManyTipo_movimentacaoInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => MovimentacaoCreateManyTipo_movimentacaoInputObjectSchema),
        z
          .lazy(() => MovimentacaoCreateManyTipo_movimentacaoInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MovimentacaoCreateManyTipo_movimentacaoInputEnvelopeObjectSchema =
  Schema;
