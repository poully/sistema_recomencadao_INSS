import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInput> =
  z
    .object({
      where: z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentoHasBeneficioCreateOrConnectWithoutDocumentoInputObjectSchema =
  Schema;
