import { z } from 'zod';
import { DocumentoWhereUniqueInputObjectSchema } from './DocumentoWhereUniqueInput.schema';
import { DocumentoCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoCreateWithoutDocumentoHasBeneficioInput.schema';
import { DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoCreateOrConnectWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentoWhereUniqueInputObjectSchema),
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

export const DocumentoCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
