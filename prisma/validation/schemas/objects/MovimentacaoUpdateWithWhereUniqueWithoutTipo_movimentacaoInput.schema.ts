import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoUpdateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUpdateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUncheckedUpdateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUncheckedUpdateWithoutTipo_movimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateWithWhereUniqueWithoutTipo_movimentacaoInput> =
  z
    .object({
      where: z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => MovimentacaoUpdateWithoutTipo_movimentacaoInputObjectSchema,
        ),
        z.lazy(
          () =>
            MovimentacaoUncheckedUpdateWithoutTipo_movimentacaoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MovimentacaoUpdateWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
