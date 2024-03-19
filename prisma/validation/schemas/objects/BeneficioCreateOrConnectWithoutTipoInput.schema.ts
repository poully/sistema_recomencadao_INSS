import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutTipoInputObjectSchema } from './BeneficioCreateWithoutTipoInput.schema';
import { BeneficioUncheckedCreateWithoutTipoInputObjectSchema } from './BeneficioUncheckedCreateWithoutTipoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutTipoInput> = z
  .object({
    where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficioCreateWithoutTipoInputObjectSchema),
      z.lazy(() => BeneficioUncheckedCreateWithoutTipoInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficioCreateOrConnectWithoutTipoInputObjectSchema = Schema;
