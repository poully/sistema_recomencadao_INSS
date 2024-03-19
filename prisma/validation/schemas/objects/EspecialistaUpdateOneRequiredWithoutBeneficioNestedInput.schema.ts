import { z } from 'zod';
import { EspecialistaCreateWithoutBeneficioInputObjectSchema } from './EspecialistaCreateWithoutBeneficioInput.schema';
import { EspecialistaUncheckedCreateWithoutBeneficioInputObjectSchema } from './EspecialistaUncheckedCreateWithoutBeneficioInput.schema';
import { EspecialistaCreateOrConnectWithoutBeneficioInputObjectSchema } from './EspecialistaCreateOrConnectWithoutBeneficioInput.schema';
import { EspecialistaUpsertWithoutBeneficioInputObjectSchema } from './EspecialistaUpsertWithoutBeneficioInput.schema';
import { EspecialistaWhereUniqueInputObjectSchema } from './EspecialistaWhereUniqueInput.schema';
import { EspecialistaUpdateWithoutBeneficioInputObjectSchema } from './EspecialistaUpdateWithoutBeneficioInput.schema';
import { EspecialistaUncheckedUpdateWithoutBeneficioInputObjectSchema } from './EspecialistaUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaUpdateOneRequiredWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EspecialistaCreateWithoutBeneficioInputObjectSchema),
          z.lazy(
            () => EspecialistaUncheckedCreateWithoutBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => EspecialistaCreateOrConnectWithoutBeneficioInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => EspecialistaUpsertWithoutBeneficioInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => EspecialistaWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => EspecialistaUpdateWithoutBeneficioInputObjectSchema),
          z.lazy(
            () => EspecialistaUncheckedUpdateWithoutBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const EspecialistaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema =
  Schema;
