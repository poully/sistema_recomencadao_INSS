import { z } from 'zod';
import { BeneficioCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateWithoutMovimentacaoInput.schema';
import { BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutMovimentacaoInput.schema';
import { BeneficioCreateOrConnectWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateOrConnectWithoutMovimentacaoInput.schema';
import { BeneficioUpsertWithoutMovimentacaoInputObjectSchema } from './BeneficioUpsertWithoutMovimentacaoInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutMovimentacaoInputObjectSchema } from './BeneficioUpdateWithoutMovimentacaoInput.schema';
import { BeneficioUncheckedUpdateWithoutMovimentacaoInputObjectSchema } from './BeneficioUncheckedUpdateWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BeneficioCreateWithoutMovimentacaoInputObjectSchema),
          z.lazy(
            () => BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BeneficioCreateOrConnectWithoutMovimentacaoInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => BeneficioUpsertWithoutMovimentacaoInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BeneficioUpdateWithoutMovimentacaoInputObjectSchema),
          z.lazy(
            () => BeneficioUncheckedUpdateWithoutMovimentacaoInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BeneficioUpdateOneRequiredWithoutMovimentacaoNestedInputObjectSchema =
  Schema;
