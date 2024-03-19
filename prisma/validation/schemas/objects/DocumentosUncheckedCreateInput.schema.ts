import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    descricao: z.string(),
    imagem: z.string(),
    beneficio_id: z.number(),
  })
  .strict();

export const DocumentosUncheckedCreateInputObjectSchema = Schema;
