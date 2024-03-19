import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutSituacaoInputObjectSchema } from './BeneficioUpdateWithoutSituacaoInput.schema';
import { BeneficioUncheckedUpdateWithoutSituacaoInputObjectSchema } from './BeneficioUncheckedUpdateWithoutSituacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithWhereUniqueWithoutSituacaoInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficioUpdateWithoutSituacaoInputObjectSchema),
        z.lazy(() => BeneficioUncheckedUpdateWithoutSituacaoInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficioUpdateWithWhereUniqueWithoutSituacaoInputObjectSchema =
  Schema;
