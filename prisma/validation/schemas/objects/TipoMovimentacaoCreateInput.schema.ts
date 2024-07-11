import { z } from 'zod';
import { MovimentacaoCreateNestedManyWithoutTipo_movimentacaoInputObjectSchema } from './MovimentacaoCreateNestedManyWithoutTipo_movimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoCreateInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
    Movimentacao: z
      .lazy(
        () =>
          MovimentacaoCreateNestedManyWithoutTipo_movimentacaoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TipoMovimentacaoCreateInputObjectSchema = Schema;
