import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioCreateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUncheckedCreateWithoutAuxilioMaternidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutAuxilioMaternidadeInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema),
        z.lazy(
          () =>
            BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioCreateOrConnectWithoutAuxilioMaternidadeInputObjectSchema =
  Schema;
