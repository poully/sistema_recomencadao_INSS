import { z } from 'zod';
import { SituacaoWhereUniqueInputObjectSchema } from './SituacaoWhereUniqueInput.schema';
import { SituacaoCreateWithoutBeneficioInputObjectSchema } from './SituacaoCreateWithoutBeneficioInput.schema';
import { SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './SituacaoUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoCreateOrConnectWithoutBeneficioInput> = z
  .object({
    where: z.lazy(() => SituacaoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SituacaoCreateWithoutBeneficioInputObjectSchema),
      z.lazy(() => SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema),
    ]),
  })
  .strict();

export const SituacaoCreateOrConnectWithoutBeneficioInputObjectSchema = Schema;
