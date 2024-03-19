import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManyTipoInput> = z
  .object({
    id: z.number().optional(),
    numero_beneficio: z.string(),
    situacao_id: z.number(),
    pessoa_id: z.number(),
    especialista_id: z.number(),
  })
  .strict();

export const BeneficioCreateManyTipoInputObjectSchema = Schema;
