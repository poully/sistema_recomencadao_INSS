import { z } from 'zod';
import { DocumentoHasBeneficioCreateNestedManyWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateNestedManyWithoutDocumentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoCreateInput> = z
  .object({
    registro: z.number(),
    comprovanteResidencia: z.string(),
    comprovanteRenda: z.string(),
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioCreateNestedManyWithoutDocumentoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentoCreateInputObjectSchema = Schema;
