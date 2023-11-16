import { z } from 'zod';
import { BeneficioCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateOrConnectWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioUpsertWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUpsertWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUpdateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUncheckedUpdateWithoutDocumentoHasBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficioCreateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BeneficioCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => BeneficioUpsertWithoutDocumentoHasBeneficioInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => BeneficioUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficioUncheckedUpdateWithoutDocumentoHasBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficioUpdateOneRequiredWithoutDocumentoHasBeneficioNestedInputObjectSchema =
  Schema;
