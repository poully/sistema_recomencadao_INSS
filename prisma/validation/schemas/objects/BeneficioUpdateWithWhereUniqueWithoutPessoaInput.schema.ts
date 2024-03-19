import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutPessoaInputObjectSchema } from './BeneficioUpdateWithoutPessoaInput.schema';
import { BeneficioUncheckedUpdateWithoutPessoaInputObjectSchema } from './BeneficioUncheckedUpdateWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateWithWhereUniqueWithoutPessoaInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BeneficioUpdateWithoutPessoaInputObjectSchema),
        z.lazy(() => BeneficioUncheckedUpdateWithoutPessoaInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficioUpdateWithWhereUniqueWithoutPessoaInputObjectSchema =
  Schema;
