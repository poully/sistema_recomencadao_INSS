import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoUpdateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUpdateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUncheckedUpdateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUncheckedUpdateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpsertWithWhereUniqueWithoutTipo_movimentacaoInput> =
  z
    .object({
      where: z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => MovimentacaoUpdateWithoutTipo_movimentacaoInputObjectSchema,
        ),
        z.lazy(
          () =>
            MovimentacaoUncheckedUpdateWithoutTipo_movimentacaoInputObjectSchema,
        ),
      ]),
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

export const MovimentacaoUpsertWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
