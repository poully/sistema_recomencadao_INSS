import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoCreateWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      registro: z.number(),
      comprovanteResidencia: z.string(),
      comprovanteRenda: z.string(),
      caminho: z.string(),
    })
    .strict();

export const DocumentoCreateWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
