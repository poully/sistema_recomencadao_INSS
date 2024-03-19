import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutTipoInputObjectSchema } from './BeneficioUpdateWithoutTipoInput.schema';
import { BeneficioUncheckedUpdateWithoutTipoInputObjectSchema } from './BeneficioUncheckedUpdateWithoutTipoInput.schema';
import { BeneficioCreateWithoutTipoInputObjectSchema } from './BeneficioCreateWithoutTipoInput.schema';
import { BeneficioUncheckedCreateWithoutTipoInputObjectSchema } from './BeneficioUncheckedCreateWithoutTipoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithWhereUniqueWithoutTipoInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficioUpdateWithoutTipoInputObjectSchema),
        z.lazy(() => BeneficioUncheckedUpdateWithoutTipoInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutTipoInputObjectSchema),
        z.lazy(() => BeneficioUncheckedCreateWithoutTipoInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficioUpsertWithWhereUniqueWithoutTipoInputObjectSchema =
  Schema;
