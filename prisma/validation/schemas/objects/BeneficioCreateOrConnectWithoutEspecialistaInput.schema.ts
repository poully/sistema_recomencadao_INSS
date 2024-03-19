import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutEspecialistaInputObjectSchema } from './BeneficioCreateWithoutEspecialistaInput.schema';
import { BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedCreateWithoutEspecialistaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutEspecialistaInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutEspecialistaInputObjectSchema),
        z.lazy(
          () => BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioCreateOrConnectWithoutEspecialistaInputObjectSchema =
  Schema;
