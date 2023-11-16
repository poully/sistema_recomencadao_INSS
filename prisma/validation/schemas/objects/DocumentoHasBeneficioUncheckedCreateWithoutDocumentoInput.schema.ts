import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInput> =
  z
    .object({
      beneficio_id: z.number(),
    })
    .strict();

export const DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema =
  Schema;
