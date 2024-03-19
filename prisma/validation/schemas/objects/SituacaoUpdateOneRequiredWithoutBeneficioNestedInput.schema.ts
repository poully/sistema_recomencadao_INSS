import { z } from 'zod';
import { SituacaoCreateWithoutBeneficioInputObjectSchema } from './SituacaoCreateWithoutBeneficioInput.schema';
import { SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './SituacaoUncheckedCreateWithoutBeneficioInput.schema';
import { SituacaoCreateOrConnectWithoutBeneficioInputObjectSchema } from './SituacaoCreateOrConnectWithoutBeneficioInput.schema';
import { SituacaoUpsertWithoutBeneficioInputObjectSchema } from './SituacaoUpsertWithoutBeneficioInput.schema';
import { SituacaoWhereUniqueInputObjectSchema } from './SituacaoWhereUniqueInput.schema';
import { SituacaoUpdateWithoutBeneficioInputObjectSchema } from './SituacaoUpdateWithoutBeneficioInput.schema';
import { SituacaoUncheckedUpdateWithoutBeneficioInputObjectSchema } from './SituacaoUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoUpdateOneRequiredWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SituacaoCreateWithoutBeneficioInputObjectSchema),
          z.lazy(
            () => SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SituacaoCreateOrConnectWithoutBeneficioInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SituacaoUpsertWithoutBeneficioInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SituacaoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SituacaoUpdateWithoutBeneficioInputObjectSchema),
          z.lazy(
            () => SituacaoUncheckedUpdateWithoutBeneficioInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SituacaoUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema =
  Schema;
