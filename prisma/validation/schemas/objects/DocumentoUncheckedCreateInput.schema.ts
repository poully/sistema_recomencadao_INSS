import { z } from 'zod';
import { DocumentoHasBeneficioUncheckedCreateNestedManyWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateNestedManyWithoutDocumentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    registro: z.number(),
    comprovanteResidencia: z.string(),
    comprovanteRenda: z.string(),
    caminho: z.string(),
    DocumentoHasBeneficio: z
      .lazy(
        () =>
          DocumentoHasBeneficioUncheckedCreateNestedManyWithoutDocumentoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DocumentoUncheckedCreateInputObjectSchema = Schema;
