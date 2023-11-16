import { z } from 'zod';
import { AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedCreateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeCreateOrConnectWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateOrConnectWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUpsertWithWhereUniqueWithoutBeneficioInput.schema';
import { AuxilioMaternidadeCreateManyBeneficioInputEnvelopeObjectSchema } from './AuxilioMaternidadeCreateManyBeneficioInputEnvelope.schema';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './AuxilioMaternidadeWhereUniqueInput.schema';
import { AuxilioMaternidadeUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUpdateWithWhereUniqueWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUpdateManyWithWhereWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUpdateManyWithWhereWithoutBeneficioInput.schema';
import { AuxilioMaternidadeScalarWhereInputObjectSchema } from './AuxilioMaternidadeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeUncheckedUpdateManyWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () => AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AuxilioMaternidadeCreateOrConnectWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AuxilioMaternidadeCreateOrConnectWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              AuxilioMaternidadeUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AuxilioMaternidadeUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AuxilioMaternidadeCreateManyBeneficioInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              AuxilioMaternidadeUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AuxilioMaternidadeUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              AuxilioMaternidadeUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AuxilioMaternidadeUpdateManyWithWhereWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AuxilioMaternidadeScalarWhereInputObjectSchema),
          z.lazy(() => AuxilioMaternidadeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AuxilioMaternidadeUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema =
  Schema;
