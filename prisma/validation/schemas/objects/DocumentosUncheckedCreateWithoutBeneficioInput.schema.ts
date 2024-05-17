import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUncheckedCreateWithoutBeneficioInput> =
  z
    .object({
      id: z.number().optional(),
      descricao: z.string(),
      conteudo: z.string(),
      extensao: z.string(),
    })
    .strict();

export const DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema =
  Schema;
