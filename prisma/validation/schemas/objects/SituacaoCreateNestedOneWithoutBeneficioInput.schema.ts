import { z } from 'zod';
import { SituacaoCreateWithoutBeneficioInputObjectSchema } from './SituacaoCreateWithoutBeneficioInput.schema';
import { SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema } from './SituacaoUncheckedCreateWithoutBeneficioInput.schema';
import { SituacaoCreateOrConnectWithoutBeneficioInputObjectSchema } from './SituacaoCreateOrConnectWithoutBeneficioInput.schema';
import { SituacaoWhereUniqueInputObjectSchema } from './SituacaoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoCreateNestedOneWithoutBeneficioInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SituacaoCreateWithoutBeneficioInputObjectSchema),
        z.lazy(() => SituacaoUncheckedCreateWithoutBeneficioInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SituacaoCreateOrConnectWithoutBeneficioInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SituacaoWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SituacaoCreateNestedOneWithoutBeneficioInputObjectSchema = Schema;
