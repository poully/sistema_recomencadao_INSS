import { z } from 'zod';
import { EspecialistaCreateWithoutBeneficioInputObjectSchema } from './EspecialistaCreateWithoutBeneficioInput.schema';
import { EspecialistaUncheckedCreateWithoutBeneficioInputObjectSchema } from './EspecialistaUncheckedCreateWithoutBeneficioInput.schema';
import { EspecialistaCreateOrConnectWithoutBeneficioInputObjectSchema } from './EspecialistaCreateOrConnectWithoutBeneficioInput.schema';
import { EspecialistaWhereUniqueInputObjectSchema } from './EspecialistaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaCreateNestedOneWithoutBeneficioInput> =
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
      connect: z
        .lazy(() => EspecialistaWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const EspecialistaCreateNestedOneWithoutBeneficioInputObjectSchema =
  Schema;
