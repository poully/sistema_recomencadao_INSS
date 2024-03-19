import { z } from 'zod';
import { BeneficioCreateWithoutSituacaoInputObjectSchema } from './BeneficioCreateWithoutSituacaoInput.schema';
import { BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutSituacaoInput.schema';
import { BeneficioCreateOrConnectWithoutSituacaoInputObjectSchema } from './BeneficioCreateOrConnectWithoutSituacaoInput.schema';
import { BeneficioUpsertWithWhereUniqueWithoutSituacaoInputObjectSchema } from './BeneficioUpsertWithWhereUniqueWithoutSituacaoInput.schema';
import { BeneficioCreateManySituacaoInputEnvelopeObjectSchema } from './BeneficioCreateManySituacaoInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithWhereUniqueWithoutSituacaoInputObjectSchema } from './BeneficioUpdateWithWhereUniqueWithoutSituacaoInput.schema';
import { BeneficioUpdateManyWithWhereWithoutSituacaoInputObjectSchema } from './BeneficioUpdateManyWithWhereWithoutSituacaoInput.schema';
import { BeneficioScalarWhereInputObjectSchema } from './BeneficioScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedUpdateManyWithoutSituacaoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficioCreateWithoutSituacaoInputObjectSchema),
          z.lazy(() => BeneficioCreateWithoutSituacaoInputObjectSchema).array(),
          z.lazy(
            () => BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficioCreateOrConnectWithoutSituacaoInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficioCreateOrConnectWithoutSituacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficioUpsertWithWhereUniqueWithoutSituacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUpsertWithWhereUniqueWithoutSituacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficioCreateManySituacaoInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BeneficioUpdateWithWhereUniqueWithoutSituacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUpdateWithWhereUniqueWithoutSituacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => BeneficioUpdateManyWithWhereWithoutSituacaoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUpdateManyWithWhereWithoutSituacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BeneficioScalarWhereInputObjectSchema),
          z.lazy(() => BeneficioScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficioUncheckedUpdateManyWithoutSituacaoNestedInputObjectSchema =
  Schema;
