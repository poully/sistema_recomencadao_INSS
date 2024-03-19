import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoUpdateWithoutBeneficioInputObjectSchema } from './MovimentacaoUpdateWithoutBeneficioInput.schema';
import { MovimentacaoUncheckedUpdateWithoutBeneficioInputObjectSchema } from './MovimentacaoUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUpdateWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => MovimentacaoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MovimentacaoUpdateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () => MovimentacaoUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MovimentacaoUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
