import { z } from 'zod';
import { DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioCreateManyDocumentoInputEnvelopeObjectSchema } from './DocumentoHasBeneficioCreateManyDocumentoInputEnvelope.schema';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateNestedManyWithoutDocumentoInput> =
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
      createMany: z
        .lazy(
          () =>
            DocumentoHasBeneficioCreateManyDocumentoInputEnvelopeObjectSchema,
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

export const DocumentoHasBeneficioCreateNestedManyWithoutDocumentoInputObjectSchema =
  Schema;
