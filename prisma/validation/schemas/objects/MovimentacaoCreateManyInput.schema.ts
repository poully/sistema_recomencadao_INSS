import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateManyInput> = z
  .object({
    id: z.number(),
    beneficio_id: z.number(),
    tipo_movimentacao_id: z.number(),
  })
  .strict();

export const MovimentacaoCreateManyInputObjectSchema = Schema;
