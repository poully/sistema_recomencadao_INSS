import { z } from 'zod';
import { BeneficioCreateWithoutTipoInputObjectSchema } from './BeneficioCreateWithoutTipoInput.schema';
import { BeneficioUncheckedCreateWithoutTipoInputObjectSchema } from './BeneficioUncheckedCreateWithoutTipoInput.schema';
import { BeneficioCreateOrConnectWithoutTipoInputObjectSchema } from './BeneficioCreateOrConnectWithoutTipoInput.schema';
import { BeneficioUpsertWithWhereUniqueWithoutTipoInputObjectSchema } from './BeneficioUpsertWithWhereUniqueWithoutTipoInput.schema';
import { BeneficioCreateManyTipoInputEnvelopeObjectSchema } from './BeneficioCreateManyTipoInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithWhereUniqueWithoutTipoInputObjectSchema } from './BeneficioUpdateWithWhereUniqueWithoutTipoInput.schema';
import { BeneficioUpdateManyWithWhereWithoutTipoInputObjectSchema } from './BeneficioUpdateManyWithWhereWithoutTipoInput.schema';
import { BeneficioScalarWhereInputObjectSchema } from './BeneficioScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateManyWithoutTipoNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => BeneficioUpsertWithWhereUniqueWithoutTipoInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficioUpsertWithWhereUniqueWithoutTipoInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => BeneficioCreateManyTipoInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => BeneficioUpdateWithWhereUniqueWithoutTipoInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficioUpdateWithWhereUniqueWithoutTipoInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => BeneficioUpdateManyWithWhereWithoutTipoInputObjectSchema),
        z
          .lazy(() => BeneficioUpdateManyWithWhereWithoutTipoInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => BeneficioScalarWhereInputObjectSchema),
        z.lazy(() => BeneficioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BeneficioUpdateManyWithoutTipoNestedInputObjectSchema = Schema;
