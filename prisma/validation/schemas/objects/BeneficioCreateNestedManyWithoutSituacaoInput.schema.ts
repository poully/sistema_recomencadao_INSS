import { z } from 'zod';
import { BeneficioCreateWithoutSituacaoInputObjectSchema } from './BeneficioCreateWithoutSituacaoInput.schema';
import { BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutSituacaoInput.schema';
import { BeneficioCreateOrConnectWithoutSituacaoInputObjectSchema } from './BeneficioCreateOrConnectWithoutSituacaoInput.schema';
import { BeneficioCreateManySituacaoInputEnvelopeObjectSchema } from './BeneficioCreateManySituacaoInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedManyWithoutSituacaoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficioCreateWithoutSituacaoInputObjectSchema),
          z.lazy(() => BeneficioCreateWithoutSituacaoInputObjectSchema).array(),
          z.lazy(
            () => BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficioCreateOrConnectWithoutSituacaoInputObjectSchema,
          ),
          z
            .lazy(
              () => BeneficioCreateOrConnectWithoutSituacaoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficioCreateManySituacaoInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficioCreateNestedManyWithoutSituacaoInputObjectSchema = Schema;
