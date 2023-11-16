import { z } from 'zod';
import { BeneficioUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUpdateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUncheckedUpdateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithoutDocumentoHasBeneficioInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BeneficioUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
        z.lazy(
          () =>
            BeneficioUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
        ),
      ]),
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

export const BeneficioUpsertWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
