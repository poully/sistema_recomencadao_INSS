import { z } from 'zod';
import { DocumentoCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateOrConnectWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoWhereUniqueInputObjectSchema } from './DocumentoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInput> =
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
      connect: z.lazy(() => DocumentoWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const DocumentoCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
