import { z } from 'zod';
import { BeneficioCreateNestedOneWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateNestedOneWithoutMovimentacaoInput.schema';
import { TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInputObjectSchema } from './TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateInput> = z
  .object({
    id: z.number(),
    beneficio: z.lazy(
      () => BeneficioCreateNestedOneWithoutMovimentacaoInputObjectSchema,
    ),
    tipo_movimentacao: z.lazy(
      () => TipoMovimentacaoCreateNestedOneWithoutMovimentacaoInputObjectSchema,
    ),
  })
  .strict();

export const MovimentacaoCreateInputObjectSchema = Schema;
