import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateManySituacaoInput> = z
  .object({
    id: z.string().optional(),
    numero_beneficio: z.string(),
    pessoa_id: z.string(),
    tipo_id: z.string(),
    especialista_id: z.string(),
  })
  .strict();

export const BeneficioCreateManySituacaoInputObjectSchema = Schema;
