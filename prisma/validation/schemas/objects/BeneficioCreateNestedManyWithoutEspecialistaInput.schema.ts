import { z } from 'zod';
import { BeneficioCreateWithoutEspecialistaInputObjectSchema } from './BeneficioCreateWithoutEspecialistaInput.schema';
import { BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedCreateWithoutEspecialistaInput.schema';
import { BeneficioCreateOrConnectWithoutEspecialistaInputObjectSchema } from './BeneficioCreateOrConnectWithoutEspecialistaInput.schema';
import { BeneficioCreateManyEspecialistaInputEnvelopeObjectSchema } from './BeneficioCreateManyEspecialistaInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedManyWithoutEspecialistaInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficioCreateWithoutEspecialistaInputObjectSchema),
          z
            .lazy(() => BeneficioCreateWithoutEspecialistaInputObjectSchema)
            .array(),
          z.lazy(
            () => BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BeneficioCreateOrConnectWithoutEspecialistaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BeneficioCreateOrConnectWithoutEspecialistaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BeneficioCreateManyEspecialistaInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
          z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BeneficioCreateNestedManyWithoutEspecialistaInputObjectSchema =
  Schema;
