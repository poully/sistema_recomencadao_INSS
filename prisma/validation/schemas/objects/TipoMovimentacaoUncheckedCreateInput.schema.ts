import { z } from 'zod';
import { MovimentacaoUncheckedCreateNestedManyWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoUncheckedCreateNestedManyWithoutTipo_movimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoUncheckedCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    Movimentacao: z
      .lazy(
        () =>
          MovimentacaoUncheckedCreateNestedManyWithoutTipo_movimentacaoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TipoMovimentacaoUncheckedCreateInputObjectSchema = Schema;
