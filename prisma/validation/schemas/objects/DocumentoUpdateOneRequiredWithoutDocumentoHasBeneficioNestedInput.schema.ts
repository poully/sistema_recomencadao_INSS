import { z } from 'zod';
import { DocumentoCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateOrConnectWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoUpsertWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUpsertWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoWhereUniqueInputObjectSchema } from './DocumentoWhereUniqueInput.schema';
import { DocumentoUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUpdateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUncheckedUpdateWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => DocumentoCreateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
          z.lazy(
            () =>
              DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            DocumentoCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => DocumentoUpsertWithoutDocumentoHasBeneficioInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => DocumentoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => DocumentoUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
          z.lazy(
            () =>
              DocumentoUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const DocumentoUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema =
  Schema;
