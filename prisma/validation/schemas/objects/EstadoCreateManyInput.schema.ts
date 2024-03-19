import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoCreateManyInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
  })
  .strict();

export const EstadoCreateManyInputObjectSchema = Schema;
