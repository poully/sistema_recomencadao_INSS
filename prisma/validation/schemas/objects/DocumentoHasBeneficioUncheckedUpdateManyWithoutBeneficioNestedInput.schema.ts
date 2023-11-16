import { z } from 'zod';
import { DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUpsertWithWhereUniqueWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioCreateManyBeneficioInputEnvelopeObjectSchema } from './DocumentoHasBeneficioCreateManyBeneficioInputEnvelope.schema';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUpdateWithWhereUniqueWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUpdateManyWithWhereWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUpdateManyWithWhereWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioScalarWhereInputObjectSchema } from './DocumentoHasBeneficioScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUncheckedUpdateManyWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            DocumentoHasBeneficioCreateManyBeneficioInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
          z
            .lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
          z
            .lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
          z
            .lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
          z
            .lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema),
          z
            .lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const DocumentoHasBeneficioUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema =
  Schema;
