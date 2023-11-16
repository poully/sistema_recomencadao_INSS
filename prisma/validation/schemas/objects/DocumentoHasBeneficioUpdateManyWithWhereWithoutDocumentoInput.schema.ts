import { z } from 'zod';
import { DocumentoHasBeneficioScalarWhereInputObjectSchema } from './DocumentoHasBeneficioScalarWhereInput.schema';
import { DocumentoHasBeneficioUpdateManyMutationInputObjectSchema } from './DocumentoHasBeneficioUpdateManyMutationInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoHasBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpdateManyWithWhereWithoutDocumentoInput> =
  z
    .object({
      where: z.lazy(() => DocumentoHasBeneficioScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DocumentoHasBeneficioUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DocumentoHasBeneficioUncheckedUpdateManyWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentoHasBeneficioUpdateManyWithWhereWithoutDocumentoInputObjectSchema =
  Schema;
