import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoCreateManyBeneficioInput> = z
  .object({
    id: z.number(),
    tipo_movimentacao_id: z.number(),
  })
  .strict();

export const MovimentacaoCreateManyBeneficioInputObjectSchema = Schema;
