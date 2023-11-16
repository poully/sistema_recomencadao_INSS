import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioUpdateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUpdateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUncheckedUpdateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutDocumentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpsertWithWhereUniqueWithoutDocumentoInput> =
  z
    .object({
      where: z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => DocumentoHasBeneficioUpdateWithoutDocumentoInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoHasBeneficioUncheckedUpdateWithoutDocumentoInputObjectSchema,
        ),
      ]),
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

export const DocumentoHasBeneficioUpsertWithWhereUniqueWithoutDocumentoInputObjectSchema =
  Schema;
