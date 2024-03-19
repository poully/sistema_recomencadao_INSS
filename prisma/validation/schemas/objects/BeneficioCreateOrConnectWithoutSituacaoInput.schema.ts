import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutSituacaoInputObjectSchema } from './BeneficioCreateWithoutSituacaoInput.schema';
import { BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutSituacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutSituacaoInput> = z
  .object({
    where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficioCreateWithoutSituacaoInputObjectSchema),
      z.lazy(() => BeneficioUncheckedCreateWithoutSituacaoInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficioCreateOrConnectWithoutSituacaoInputObjectSchema = Schema;
