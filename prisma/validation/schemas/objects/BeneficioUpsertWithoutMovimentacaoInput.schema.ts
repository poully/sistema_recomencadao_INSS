import { z } from 'zod';
import { BeneficioUpdateWithoutMovimentacaoInputObjectSchema } from './BeneficioUpdateWithoutMovimentacaoInput.schema';
import { BeneficioUncheckedUpdateWithoutMovimentacaoInputObjectSchema } from './BeneficioUncheckedUpdateWithoutMovimentacaoInput.schema';
import { BeneficioCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioCreateWithoutMovimentacaoInput.schema';
import { BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema } from './BeneficioUncheckedCreateWithoutMovimentacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithoutMovimentacaoInput> = z
  .object({
    update: z.union([
      z.lazy(() => BeneficioUpdateWithoutMovimentacaoInputObjectSchema),
      z.lazy(
        () => BeneficioUncheckedUpdateWithoutMovimentacaoInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => BeneficioCreateWithoutMovimentacaoInputObjectSchema),
      z.lazy(
        () => BeneficioUncheckedCreateWithoutMovimentacaoInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const BeneficioUpsertWithoutMovimentacaoInputObjectSchema = Schema;
