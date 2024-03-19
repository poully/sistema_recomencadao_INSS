import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoCreateWithoutBeneficioInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
  })
  .strict();

export const TipoCreateWithoutBeneficioInputObjectSchema = Schema;
