import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateManyDocumentoInput> =
  z
    .object({
      beneficio_id: z.number(),
    })
    .strict();

export const DocumentoHasBeneficioCreateManyDocumentoInputObjectSchema = Schema;
