import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutEspecialistaInputObjectSchema } from './BeneficioUpdateWithoutEspecialistaInput.schema';
import { BeneficioUncheckedUpdateWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedUpdateWithoutEspecialistaInput.schema';
import { BeneficioCreateWithoutEspecialistaInputObjectSchema } from './BeneficioCreateWithoutEspecialistaInput.schema';
import { BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedCreateWithoutEspecialistaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithWhereUniqueWithoutEspecialistaInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficioUpdateWithoutEspecialistaInputObjectSchema),
        z.lazy(
          () => BeneficioUncheckedUpdateWithoutEspecialistaInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutEspecialistaInputObjectSchema),
        z.lazy(
          () => BeneficioUncheckedCreateWithoutEspecialistaInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioUpsertWithWhereUniqueWithoutEspecialistaInputObjectSchema =
  Schema;
