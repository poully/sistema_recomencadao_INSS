import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateManyInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    estado_id: z.number(),
  })
  .strict();

export const CidadeCreateManyInputObjectSchema = Schema;
