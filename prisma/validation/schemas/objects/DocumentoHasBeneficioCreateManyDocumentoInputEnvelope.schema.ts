import { z } from 'zod';
import { DocumentoHasBeneficioCreateManyDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateManyDocumentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateManyDocumentoInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => DocumentoHasBeneficioCreateManyDocumentoInputObjectSchema),
        z
          .lazy(() => DocumentoHasBeneficioCreateManyDocumentoInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const DocumentoHasBeneficioCreateManyDocumentoInputEnvelopeObjectSchema =
  Schema;
