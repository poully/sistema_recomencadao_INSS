import { z } from 'zod';
import { BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioCreateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUncheckedCreateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioCreateOrConnectWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioCreateOrConnectWithoutAuxilioMaternidadeInput.schema';
import { BeneficioUpsertWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUpsertWithoutAuxilioMaternidadeInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUpdateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioUncheckedUpdateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUncheckedUpdateWithoutAuxilioMaternidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateOneRequiredWithoutAuxilioMaternidadeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BeneficioCreateOrConnectWithoutAuxilioMaternidadeInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => BeneficioUpsertWithoutAuxilioMaternidadeInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => BeneficioUpdateWithoutAuxilioMaternidadeInputObjectSchema,
          ),
          z.lazy(
            () =>
              BeneficioUncheckedUpdateWithoutAuxilioMaternidadeInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficioUpdateOneRequiredWithoutAuxilioMaternidadeNestedInputObjectSchema =
  Schema;
