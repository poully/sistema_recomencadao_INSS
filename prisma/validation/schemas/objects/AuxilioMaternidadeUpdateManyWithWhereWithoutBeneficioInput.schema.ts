import { z } from 'zod';
import { AuxilioMaternidadeScalarWhereInputObjectSchema } from './AuxilioMaternidadeScalarWhereInput.schema';
import { AuxilioMaternidadeUpdateManyMutationInputObjectSchema } from './AuxilioMaternidadeUpdateManyMutationInput.schema';
import { AuxilioMaternidadeUncheckedUpdateManyWithoutAuxilioMaternidadeInputObjectSchema } from './AuxilioMaternidadeUncheckedUpdateManyWithoutAuxilioMaternidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeUpdateManyWithWhereWithoutBeneficioInput> =
  z
    .object({
      where: z.lazy(() => AuxilioMaternidadeScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AuxilioMaternidadeUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AuxilioMaternidadeUncheckedUpdateManyWithoutAuxilioMaternidadeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AuxilioMaternidadeUpdateManyWithWhereWithoutBeneficioInputObjectSchema =
  Schema;
