import { z } from 'zod';
import { DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioCreateManyBeneficioInputEnvelopeObjectSchema } from './DocumentoHasBeneficioCreateManyBeneficioInputEnvelope.schema';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInput> =
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
      createMany: z
        .lazy(
          () =>
            DocumentoHasBeneficioCreateManyBeneficioInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
          z
            .lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const DocumentoHasBeneficioUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema =
  Schema;
