import { z } from 'zod';
import { EspecialistaWhereUniqueInputObjectSchema } from './EspecialistaWhereUniqueInput.schema';
import { EspecialistaCreateWithoutBeneficioInputObjectSchema } from './EspecialistaCreateWithoutBeneficioInput.schema';
import { EspecialistaUncheckedCreateWithoutBeneficioInputObjectSchema } from './EspecialistaUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaCreateOrConnectWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => EspecialistaWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EspecialistaCreateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => EspecialistaUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EspecialistaCreateOrConnectWithoutBeneficioInputObjectSchema =
  Schema;
