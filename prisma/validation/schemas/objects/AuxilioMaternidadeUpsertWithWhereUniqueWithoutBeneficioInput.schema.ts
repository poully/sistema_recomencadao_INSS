import { z } from 'zod';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './AuxilioMaternidadeWhereUniqueInput.schema';
import { AuxilioMaternidadeUpdateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUpdateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUncheckedUpdateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedUpdateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeCreateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeUpsertWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AuxilioMaternidadeUpdateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () =>
            AuxilioMaternidadeUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AuxilioMaternidadeCreateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () =>
            AuxilioMaternidadeUncheckedCreateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AuxilioMaternidadeUpsertWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
