import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateWithoutMovimentacaoInput.schema';
import { BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutMovimentacaoInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutMovimentacaoInputObjectSchema),
        z.lazy(
          () => BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioCreateOrConnectWithoutMovimentacaoInputObjectSchema =
  Schema;
