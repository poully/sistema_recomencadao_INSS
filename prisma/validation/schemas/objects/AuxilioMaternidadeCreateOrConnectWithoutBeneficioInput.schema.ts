import { z } from 'zod';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './AuxilioMaternidadeWhereUniqueInput.schema';
import { AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeCreateOrConnectWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () =>
            AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AuxilioMaternidadeCreateOrConnectWithoutBeneficioInputObjectSchema =
  Schema;
