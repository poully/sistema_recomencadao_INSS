import { z } from 'zod';
import { SituacaoUpdateWithoutBeneficioInputObjectSchema } from './SituacaoUpdateWithoutBeneficioInput.schema';
import { SituacaoUncheckedUpdateWithoutBeneficioInputObjectSchema } from './SituacaoUncheckedUpdateWithoutBeneficioInput.schema';
import { SituacaoCreateWithoutBeneficioInputObjectSchema } from './SituacaoCreateWithoutBeneficioInput.schema';
import { SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './SituacaoUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoUpsertWithoutBeneficioInput> = z
  .object({
    update: z.union([
      z.lazy(() => SituacaoUpdateWithoutBeneficioInputObjectSchema),
      z.lazy(() => SituacaoUncheckedUpdateWithoutBeneficioInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SituacaoCreateWithoutBeneficioInputObjectSchema),
      z.lazy(() => SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema),
    ]),
  })
  .strict();

export const SituacaoUpsertWithoutBeneficioInputObjectSchema = Schema;
