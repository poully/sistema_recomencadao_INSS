import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateOrConnectWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MovimentacaoCreateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MovimentacaoCreateOrConnectWithoutBeneficioInputObjectSchema =
  Schema;
