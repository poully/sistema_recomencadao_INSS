import { z } from 'zod';
import { TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateWithoutBeneficioInput> = z
  .object({
    id: z.number(),
    tipo_movimentacao: z.lazy(
      () => TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInputObjectSchema,
    ),
  })
  .strict();

export const MovimentacaoCreateWithoutBeneficioInputObjectSchema = Schema;
