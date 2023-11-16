import { z } from 'zod';
import { AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedCreateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeCreateOrConnectWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateOrConnectWithoutBeneficioInput.schema';
import { AuxilioMaternidadeCreateManyBeneficioInputEnvelopeObjectSchema } from './AuxilioMaternidadeCreateManyBeneficioInputEnvelope.schema';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './AuxilioMaternidadeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeCreateNestedManyWithoutBeneficioInput> =
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
      createMany: z
        .lazy(
          () => AuxilioMaternidadeCreateManyBeneficioInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
          z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AuxilioMaternidadeCreateNestedManyWithoutBeneficioInputObjectSchema =
  Schema;
