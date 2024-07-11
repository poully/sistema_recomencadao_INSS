import { z } from 'zod';
import { BeneficioCreateNestedOneWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateNestedOneWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateWithoutTipo_movimentacaoInput> =
  z
    .object({
      id: z.string().optional(),
      beneficio: z.lazy(
        () => BeneficioCreateNestedOneWithoutMovimentacaoInputObjectSchema,
      ),
    })
    .strict();

export const MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema =
  Schema;
