import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateManyBeneficioInput> =
  z
    .object({
      documento_id: z.number(),
    })
    .strict();

export const DocumentoHasBeneficioCreateManyBeneficioInputObjectSchema = Schema;
