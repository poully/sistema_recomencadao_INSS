import { z } from 'zod';
import { MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateOrConnectWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUpsertWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUpsertWithWhereUniqueWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoCreateManyTipo_movimentacaoInputEnvelopeObjectSchema } from './MovimentacaoCreateManyTipo_movimentacaoInputEnvelope.schema';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoUpdateWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUpdateWithWhereUniqueWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoUpdateManyWithWhereWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUpdateManyWithWhereWithoutTipo_movimentacaoInput.schema';
import { MovimentacaoScalarWhereInputObjectSchema } from './MovimentacaoScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateManyWithoutTipo_movimentacaoNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MovimentacaoUpsertWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUpsertWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MovimentacaoUpdateWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUpdateWithWhereUniqueWithoutTipo_movimentacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MovimentacaoUpdateManyWithWhereWithoutTipo_movimentacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUpdateManyWithWhereWithoutTipo_movimentacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MovimentacaoScalarWhereInputObjectSchema),
          z.lazy(() => MovimentacaoScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MovimentacaoUpdateManyWithoutTipo_movimentacaoNestedInputObjectSchema =
  Schema;
