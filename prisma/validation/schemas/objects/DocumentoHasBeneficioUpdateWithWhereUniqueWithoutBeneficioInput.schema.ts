import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioUpdateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUpdateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpdateWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => DocumentoHasBeneficioUpdateWithoutBeneficioInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoHasBeneficioUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentoHasBeneficioUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
