import { z } from 'zod';
import { MovimentacaoScalarWhereInputObjectSchema } from './MovimentacaoScalarWhereInput.schema';
import { MovimentacaoUpdateManyMutationInputObjectSchema } from './MovimentacaoUpdateManyMutationInput.schema';
import { MovimentacaoUncheckedUpdateManyWithoutMovimentacaoInputObjectSchema } from './MovimentacaoUncheckedUpdateManyWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateManyWithWhereWithoutTipo_movimentacaoInput> =
  z
    .object({
      where: z.lazy(() => MovimentacaoScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MovimentacaoUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MovimentacaoUncheckedUpdateManyWithoutMovimentacaoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MovimentacaoUpdateManyWithWhereWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
