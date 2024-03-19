import { z } from 'zod';
import { BeneficioCreateWithoutTipoInputObjectSchema } from './BeneficioCreateWithoutTipoInput.schema';
import { BeneficioUncheckedCreateWithoutTipoInputObjectSchema } from './BeneficioUncheckedCreateWithoutTipoInput.schema';
import { BeneficioCreateOrConnectWithoutTipoInputObjectSchema } from './BeneficioCreateOrConnectWithoutTipoInput.schema';
import { BeneficioCreateManyTipoInputEnvelopeObjectSchema } from './BeneficioCreateManyTipoInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedManyWithoutTipoInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BeneficioCreateWithoutTipoInputObjectSchema),
        z.lazy(() => BeneficioCreateWithoutTipoInputObjectSchema).array(),
        z.lazy(() => BeneficioUncheckedCreateWithoutTipoInputObjectSchema),
        z
          .lazy(() => BeneficioUncheckedCreateWithoutTipoInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => BeneficioCreateOrConnectWithoutTipoInputObjectSchema),
        z
          .lazy(() => BeneficioCreateOrConnectWithoutTipoInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => BeneficioCreateManyTipoInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BeneficioCreateNestedManyWithoutTipoInputObjectSchema = Schema;
