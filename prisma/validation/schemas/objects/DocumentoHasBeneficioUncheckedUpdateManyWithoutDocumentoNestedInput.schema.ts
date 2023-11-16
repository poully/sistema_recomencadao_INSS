import { z } from 'zod';
import { DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUpsertWithWhereUniqueWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUpsertWithWhereUniqueWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioCreateManyDocumentoInputEnvelopeObjectSchema } from './DocumentoHasBeneficioCreateManyDocumentoInputEnvelope.schema';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioUpdateWithWhereUniqueWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUpdateWithWhereUniqueWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUpdateManyWithWhereWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUpdateManyWithWhereWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioScalarWhereInputObjectSchema } from './DocumentoHasBeneficioScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioUpsertWithWhereUniqueWithoutDocumentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUpsertWithWhereUniqueWithoutDocumentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            DocumentoHasBeneficioCreateManyDocumentoInputEnvelopeObjectSchema,
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
              DocumentoHasBeneficioUpdateWithWhereUniqueWithoutDocumentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUpdateWithWhereUniqueWithoutDocumentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DocumentoHasBeneficioUpdateManyWithWhereWithoutDocumentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                DocumentoHasBeneficioUpdateManyWithWhereWithoutDocumentoInputObjectSchema,
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

export const DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoNestedInputObjectSchema =
  Schema;
