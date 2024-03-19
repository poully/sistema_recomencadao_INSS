import { z } from 'zod';
import { MovimentacaoCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutBeneficioInput.schema';
import { MovimentacaoCreateOrConnectWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateOrConnectWithoutBeneficioInput.schema';
import { MovimentacaoUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema } from './MovimentacaoUpsertWithWhereUniqueWithoutBeneficioInput.schema';
import { MovimentacaoCreateManyBeneficioInputEnvelopeObjectSchema } from './MovimentacaoCreateManyBeneficioInputEnvelope.schema';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema } from './MovimentacaoUpdateWithWhereUniqueWithoutBeneficioInput.schema';
import { MovimentacaoUpdateManyWithWhereWithoutBeneficioInputObjectSchema } from './MovimentacaoUpdateManyWithWhereWithoutBeneficioInput.schema';
import { MovimentacaoScalarWhereInputObjectSchema } from './MovimentacaoScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUncheckedUpdateManyWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MovimentacaoCreateWithoutBeneficioInputObjectSchema),
          z
            .lazy(() => MovimentacaoCreateWithoutBeneficioInputObjectSchema)
            .array(),
          z.lazy(
            () => MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MovimentacaoCreateOrConnectWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoCreateOrConnectWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MovimentacaoUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MovimentacaoCreateManyBeneficioInputEnvelopeObjectSchema)
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
              MovimentacaoUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MovimentacaoUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
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

export const MovimentacaoUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema =
  Schema;
