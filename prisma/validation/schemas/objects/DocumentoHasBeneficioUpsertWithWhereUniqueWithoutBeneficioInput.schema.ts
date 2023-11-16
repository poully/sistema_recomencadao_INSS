import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioUpdateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUpdateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedUpdateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioUpsertWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => DocumentoHasBeneficioUpdateWithoutBeneficioInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoHasBeneficioUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema,
        ),
        z.lazy(
          () =>
            DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const DocumentoHasBeneficioUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
