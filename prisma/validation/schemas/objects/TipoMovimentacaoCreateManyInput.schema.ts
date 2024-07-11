import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoMovimentacaoCreateManyInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
  })
  .strict();

export const TipoMovimentacaoCreateManyInputObjectSchema = Schema;
