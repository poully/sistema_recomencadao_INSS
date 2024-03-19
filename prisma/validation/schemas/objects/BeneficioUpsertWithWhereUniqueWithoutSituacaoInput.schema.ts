import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutSituacaoInputObjectSchema } from './BeneficioUpdateWithoutSituacaoInput.schema';
import { BeneficioUncheckedUpdateWithoutSituacaoInputObjectSchema } from './BeneficioUncheckedUpdateWithoutSituacaoInput.schema';
import { BeneficioCreateWithoutSituacaoInputObjectSchema } from './BeneficioCreateWithoutSituacaoInput.schema';
import { BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutSituacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithWhereUniqueWithoutSituacaoInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficioUpdateWithoutSituacaoInputObjectSchema),
        z.lazy(() => BeneficioUncheckedUpdateWithoutSituacaoInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutSituacaoInputObjectSchema),
        z.lazy(() => BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficioUpsertWithWhereUniqueWithoutSituacaoInputObjectSchema =
  Schema;
