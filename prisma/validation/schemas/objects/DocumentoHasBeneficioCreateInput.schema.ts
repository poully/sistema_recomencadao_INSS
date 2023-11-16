import { z } from 'zod';
import { DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateInput> = z
  .object({
    documento: z.lazy(
      () =>
        DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema,
    ),
    beneficio: z.lazy(
      () =>
        BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema,
    ),
  })
  .strict();

export const DocumentoHasBeneficioCreateInputObjectSchema = Schema;
