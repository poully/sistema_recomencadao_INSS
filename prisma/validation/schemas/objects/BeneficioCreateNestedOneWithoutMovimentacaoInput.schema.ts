import { z } from 'zod';
import { BeneficioCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateWithoutMovimentacaoInput.schema';
import { BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutMovimentacaoInput.schema';
import { BeneficioCreateOrConnectWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateOrConnectWithoutMovimentacaoInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedOneWithoutMovimentacaoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficioCreateWithoutMovimentacaoInputObjectSchema),
          z.lazy(
            () => BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BeneficioCreateOrConnectWithoutMovimentacaoInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BeneficioCreateNestedOneWithoutMovimentacaoInputObjectSchema =
  Schema;
