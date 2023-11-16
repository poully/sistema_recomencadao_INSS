import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => BeneficioCreateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
