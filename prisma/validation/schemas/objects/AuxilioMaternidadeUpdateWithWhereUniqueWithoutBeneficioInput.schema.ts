import { z } from 'zod';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './AuxilioMaternidadeWhereUniqueInput.schema';
import { AuxilioMaternidadeUpdateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUpdateWithoutBeneficioInput.schema';
import { AuxilioMaternidadeUncheckedUpdateWithoutBeneficioInputObjectSchema } from './AuxilioMaternidadeUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeUpdateWithWhereUniqueWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => AuxilioMaternidadeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AuxilioMaternidadeUpdateWithoutBeneficioInputObjectSchema),
        z.lazy(
          () =>
            AuxilioMaternidadeUncheckedUpdateWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AuxilioMaternidadeUpdateWithWhereUniqueWithoutBeneficioInputObjectSchema =
  Schema;
