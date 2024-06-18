import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentosUncheckedCreateWithoutBeneficioInput> =
  z
    .object({
      id: z.number().optional(),
      descricao: z.string(),
      imagem: z.string(),
    })
    .strict();

export const DocumentosUncheckedCreateWithoutBeneficioInputObjectSchema =
  Schema;
