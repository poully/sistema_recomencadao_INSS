import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutEspecialistaInputObjectSchema } from './BeneficioUpdateWithoutEspecialistaInput.schema';
import { BeneficioUncheckedUpdateWithoutEspecialistaInputObjectSchema } from './BeneficioUncheckedUpdateWithoutEspecialistaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithWhereUniqueWithoutEspecialistaInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficioUpdateWithoutEspecialistaInputObjectSchema),
        z.lazy(
          () => BeneficioUncheckedUpdateWithoutEspecialistaInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioUpdateWithWhereUniqueWithoutEspecialistaInputObjectSchema =
  Schema;
