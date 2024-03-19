import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInput> =
  z
    .object({
      where: z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema,
        ),
        z.lazy(
          () =>
            MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
