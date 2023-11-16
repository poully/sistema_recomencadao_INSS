import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioUpdateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUpdateWithoutDocumentoInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateWithoutDocumentoInputObjectSchema } from './DocumentoHasBeneficioUncheckedUpdateWithoutDocumentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpdateWithWhereUniqueWithoutDocumentoInput> =
  z
    .object({
      where: z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => DocumentoHasBeneficioUpdateWithoutDocumentoInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoHasBeneficioUncheckedUpdateWithoutDocumentoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentoHasBeneficioUpdateWithWhereUniqueWithoutDocumentoInputObjectSchema =
  Schema;
