import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaCreateManyInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    endereco: z.string(),
  })
  .strict();

export const EspecialistaCreateManyInputObjectSchema = Schema;
