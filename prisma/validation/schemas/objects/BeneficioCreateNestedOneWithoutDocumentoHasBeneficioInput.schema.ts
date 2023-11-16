import { z } from 'zod';
import { BeneficioCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioUncheckedCreateWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioCreateOrConnectWithoutDocumentoHasBeneficioInputObjectSchema } from './BeneficioCreateOrConnectWithoutDocumentoHasBeneficioInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInput> =
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
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BeneficioCreateNestedOneWithoutDocumentoHasBeneficioInputObjectSchema =
  Schema;
