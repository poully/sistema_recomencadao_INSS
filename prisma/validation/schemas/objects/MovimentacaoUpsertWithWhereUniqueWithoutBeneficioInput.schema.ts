import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoUpdateWithoutBeneficioInputObjectSchema } from './MovimentacaoUpdateWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedUpdateWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedUpdateWithoutBeneficioInput.schema';
import { MovimentacaoCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoCreateWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpsertWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MovimentacaoUpdateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => MovimentacaoUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MovimentacaoCreateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => MovimentacaoUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MovimentacaoUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
