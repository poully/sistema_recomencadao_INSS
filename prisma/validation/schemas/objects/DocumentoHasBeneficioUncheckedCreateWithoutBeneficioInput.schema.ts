import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInput> =
  z
    .object({
      documento_id: z.number(),
    })
    .strict();

export const DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema =
  Schema;
