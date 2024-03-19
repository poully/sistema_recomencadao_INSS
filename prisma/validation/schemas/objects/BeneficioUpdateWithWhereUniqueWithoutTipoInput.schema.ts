import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutTipoInputObjectSchema } from './BeneficioUpdateWithoutTipoInput.schema';
import { BeneficioUncheckedUpdateWithoutTipoInputObjectSchema } from './BeneficioUncheckedUpdateWithoutTipoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithWhereUniqueWithoutTipoInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficioUpdateWithoutTipoInputObjectSchema),
        z.lazy(() => BeneficioUncheckedUpdateWithoutTipoInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficioUpdateWithWhereUniqueWithoutTipoInputObjectSchema =
  Schema;
