import { z } from 'zod';
import { BeneficioCreateWithoutEspecialistaInputObjectSchema } from './BeneficioCreateWithoutEspecialistaInput.schema';
import { BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedCreateWithoutEspecialistaInput.schema';
import { BeneficioCreateOrConnectWithoutEspecialistaInputObjectSchema } from './BeneficioCreateOrConnectWithoutEspecialistaInput.schema';
import { BeneficioUpsertWithWhereUniqueWithoutEspecialistaInputObjectSchema } from './BeneficioUpsertWithWhereUniqueWithoutEspecialistaInput.schema';
import { BeneficioCreateManyEspecialistaInputEnvelopeObjectSchema } from './BeneficioCreateManyEspecialistaInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithWhereUniqueWithoutEspecialistaInputObjectSchema } from './BeneficioUpdateWithWhereUniqueWithoutEspecialistaInput.schema';
import { BeneficioUpdateManyWithWhereWithoutEspecialistaInputObjectSchema } from './BeneficioUpdateManyWithWhereWithoutEspecialistaInput.schema';
import { BeneficioScalarWhereInputObjectSchema } from './BeneficioScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUncheckedUpdateManyWithoutEspecialistaNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficioCreateWithoutEspecialistaInputObjectSchema),
          z
            .lazy(() => BeneficioCreateWithoutEspecialistaInputObjectSchema)
            .array(),
          z.lazy(
            () => BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficioCreateOrConnectWithoutEspecialistaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioCreateOrConnectWithoutEspecialistaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BeneficioUpsertWithWhereUniqueWithoutEspecialistaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUpsertWithWhereUniqueWithoutEspecialistaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficioCreateManyEspecialistaInputEnvelopeObjectSchema)
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
              BeneficioUpdateWithWhereUniqueWithoutEspecialistaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUpdateWithWhereUniqueWithoutEspecialistaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BeneficioUpdateManyWithWhereWithoutEspecialistaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUpdateManyWithWhereWithoutEspecialistaInputObjectSchema,
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

export const BeneficioUncheckedUpdateManyWithoutEspecialistaNestedInputObjectSchema =
  Schema;
