import { z } from 'zod';
import { BeneficioScalarWhereInputObjectSchema } from './BeneficioScalarWhereInput.schema';
import { BeneficioUpdateManyMutationInputObjectSchema } from './BeneficioUpdateManyMutationInput.schema';
import { BeneficioUncheckedUpdateManyWithoutBeneficioInputObjectSchema } from './BeneficioUncheckedUpdateManyWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateManyWithWhereWithoutPessoaInput> =
  z
    .object({
      where: z.lazy(() => BeneficioScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficioUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => BeneficioUncheckedUpdateManyWithoutBeneficioInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BeneficioUpdateManyWithWhereWithoutPessoaInputObjectSchema =
  Schema;
