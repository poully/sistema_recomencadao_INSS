import { z } from 'zod';
import { DocumentosCreateWithoutBeneficioInputObjectSchema } from './DocumentosCreateWithoutBeneficioInput.schema';
import { DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateWithoutBeneficioInput.schema';
import { DocumentosCreateOrConnectWithoutBeneficioInputObjectSchema } from './DocumentosCreateOrConnectWithoutBeneficioInput.schema';
import { DocumentosUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema } from './DocumentosUpsertWithWhereUniqueWithoutBeneficioInput.schema';
import { DocumentosCreateManyBeneficioInputEnvelopeObjectSchema } from './DocumentosCreateManyBeneficioInputEnvelope.schema';
import { DocumentosWhereUniqueInputObjectSchema } from './DocumentosWhereUniqueInput.schema';
import { DocumentosUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema } from './DocumentosUpdateWithWhereUniqueWithoutBeneficioInput.schema';
import { DocumentosUpdateManyWithWhereWithoutBeneficioInputObjectSchema } from './DocumentosUpdateManyWithWhereWithoutBeneficioInput.schema';
import { DocumentosScalarWhereInputObjectSchema } from './DocumentosScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUncheckedUpdateManyWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DocumentosCreateWithoutBeneficioInputObjectSchema),
          z
            .lazy(() => DocumentosCreateWithoutBeneficioInputObjectSchema)
            .array(),
          z.lazy(
            () => DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () => DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DocumentosCreateOrConnectWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () => DocumentosCreateOrConnectWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DocumentosUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentosUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DocumentosCreateManyBeneficioInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DocumentosUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentosUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DocumentosUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentosUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DocumentosScalarWhereInputObjectSchema),
          z.lazy(() => DocumentosScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DocumentosUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema =
  Schema;
