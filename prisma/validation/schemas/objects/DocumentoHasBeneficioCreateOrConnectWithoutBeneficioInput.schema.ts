import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioCreateWithoutBeneficioInput.schema';
import { DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInputObjectSchema } from './DocumentoHasBeneficioUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => DocumentoHasBeneficioWhereUniqueInputObjectSchema),
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

export const DocumentoHasBeneficioCreateOrConnectWithoutBeneficioInputObjectSchema =
  Schema;
