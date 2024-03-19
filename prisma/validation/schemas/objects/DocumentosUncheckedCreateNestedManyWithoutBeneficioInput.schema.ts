import { z } from 'zod';
import { DocumentosCreateWithoutBeneficioInputObjectSchema } from './DocumentosCreateWithoutBeneficioInput.schema';
import { DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentosUncheckedCreateWithoutBeneficioInput.schema';
import { DocumentosCreateOrConnectWithoutBeneficioInputObjectSchema } from './DocumentosCreateOrConnectWithoutBeneficioInput.schema';
import { DocumentosCreateManyBeneficioInputEnvelopeObjectSchema } from './DocumentosCreateManyBeneficioInputEnvelope.schema';
import { DocumentosWhereUniqueInputObjectSchema } from './DocumentosWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUncheckedCreateNestedManyWithoutBeneficioInput> =
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
      createMany: z
        .lazy(() => DocumentosCreateManyBeneficioInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema),
          z.lazy(() => DocumentosWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DocumentosUncheckedCreateNestedManyWithoutBeneficioInputObjectSchema =
  Schema;
