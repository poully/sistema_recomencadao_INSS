import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCreateManyBeneficioInput> = z
  .object({
    id: z.number().optional(),
    descricao: z.string(),
    imagem: z.string(),
  })
  .strict();

export const DocumentosCreateManyBeneficioInputObjectSchema = Schema;
