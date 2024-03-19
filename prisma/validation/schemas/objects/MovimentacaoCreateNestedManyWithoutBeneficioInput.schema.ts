import { z } from 'zod';
import { MovimentacaoCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutBeneficioInput.schema';
import { MovimentacaoCreateOrConnectWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateOrConnectWithoutBeneficioInput.schema';
import { MovimentacaoCreateManyBeneficioInputEnvelopeObjectSchema } from './MovimentacaoCreateManyBeneficioInputEnvelope.schema';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateNestedManyWithoutBeneficioInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MovimentacaoCreateWithoutBeneficioInputObjectSchema),
          z
            .lazy(() => MovimentacaoCreateWithoutBeneficioInputObjectSchema)
            .array(),
          z.lazy(
            () => MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MovimentacaoCreateOrConnectWithoutBeneficioInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MovimentacaoCreateOrConnectWithoutBeneficioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MovimentacaoCreateManyBeneficioInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
          z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MovimentacaoCreateNestedManyWithoutBeneficioInputObjectSchema =
  Schema;
