import { z } from 'zod';
import { DocumentoUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUpdateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUncheckedUpdateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoUpsertWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => DocumentoUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => DocumentoCreateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentoUpsertWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
