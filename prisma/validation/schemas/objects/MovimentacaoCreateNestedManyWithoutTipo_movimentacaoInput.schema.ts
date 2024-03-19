import { z } from 'zod';
import { MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoCreateManyTipo_movimentacaoInputEnvelopeObjectSchema } from './MovimentacaoCreateManyTipo_movimentacaoInputEnvelope.schema';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateNestedManyWithoutTipo_movimentacaoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema,
          ),
          z
            .lazy(
              () => MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            MovimentacaoCreateManyTipo_movimentacaoInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MovimentacaoCreateNestedManyWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
