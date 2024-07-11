import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoCreateManyInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
  })
  .strict();

export const SituacaoCreateManyInputObjectSchema = Schema;
