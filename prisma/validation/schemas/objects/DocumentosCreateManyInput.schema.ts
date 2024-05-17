import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCreateManyInput> = z
  .object({
    id: z.number().optional(),
    descricao: z.string(),
    conteudo: z.string(),
    extensao: z.string(),
    beneficio_id: z.number(),
  })
  .strict();

export const DocumentosCreateManyInputObjectSchema = Schema;
