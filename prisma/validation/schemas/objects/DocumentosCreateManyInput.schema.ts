import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCreateManyInput> = z
  .object({
    id: z.string().optional(),
    descricao: z.string(),
    imagem: z.string(),
    beneficio_id: z.string(),
  })
  .strict();

export const DocumentosCreateManyInputObjectSchema = Schema;
