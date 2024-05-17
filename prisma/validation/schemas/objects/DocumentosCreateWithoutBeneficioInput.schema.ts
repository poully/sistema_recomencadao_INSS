import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosCreateWithoutBeneficioInput> = z
  .object({
    descricao: z.string(),
    conteudo: z.string(),
    extensao: z.string(),
  })
  .strict();

export const DocumentosCreateWithoutBeneficioInputObjectSchema = Schema;
