import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUncheckedCreateInput> = z
  .object({
    documento_id: z.number(),
    beneficio_id: z.number(),
  })
  .strict();

export const DocumentoHasBeneficioUncheckedCreateInputObjectSchema = Schema;
