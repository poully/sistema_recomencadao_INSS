import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    tipo_movimentacao_id: z.string(),
    beneficio_id: z.string(),
  })
  .strict();

export const MovimentacaoUncheckedCreateInputObjectSchema = Schema;
