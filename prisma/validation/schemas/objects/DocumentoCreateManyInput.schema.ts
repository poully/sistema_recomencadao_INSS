import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoCreateManyInput> = z
  .object({
    id: z.number().optional(),
    registro: z.number(),
    comprovanteResidencia: z.string(),
    comprovanteRenda: z.string(),
    caminho: z.string(),
  })
  .strict();

export const DocumentoCreateManyInputObjectSchema = Schema;
