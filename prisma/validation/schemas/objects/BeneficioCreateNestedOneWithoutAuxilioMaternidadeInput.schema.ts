import { z } from 'zod';
import { BeneficioCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioCreateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioUncheckedCreateWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioUncheckedCreateWithoutAuxilioMaternidadeInput.schema';
import { BeneficioCreateOrConnectWithoutAuxilioMaternidadeInputObjectSchema } from './BeneficioCreateOrConnectWithoutAuxilioMaternidadeInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedOneWithoutAuxilioMaternidadeInput> =
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
      connect: z.lazy(() => BeneficioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const BeneficioCreateNestedOneWithoutAuxilioMaternidadeInputObjectSchema =
  Schema;
