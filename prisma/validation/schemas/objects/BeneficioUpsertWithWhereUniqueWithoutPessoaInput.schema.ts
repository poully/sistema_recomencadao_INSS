import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithoutPessoaInputObjectSchema } from './BeneficioUpdateWithoutPessoaInput.schema';
import { BeneficioUncheckedUpdateWithoutPessoaInputObjectSchema } from './BeneficioUncheckedUpdateWithoutPessoaInput.schema';
import { BeneficioCreateWithoutPessoaInputObjectSchema } from './BeneficioCreateWithoutPessoaInput.schema';
import { BeneficioUncheckedCreateWithoutPessoaInputObjectSchema } from './BeneficioUncheckedCreateWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpsertWithWhereUniqueWithoutPessoaInput> =
  z
    .object({
      where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BeneficioUpdateWithoutPessoaInputObjectSchema),
        z.lazy(() => BeneficioUncheckedUpdateWithoutPessoaInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BeneficioCreateWithoutPessoaInputObjectSchema),
        z.lazy(() => BeneficioUncheckedCreateWithoutPessoaInputObjectSchema),
      ]),
    })
    .strict();

export const BeneficioUpsertWithWhereUniqueWithoutPessoaInputObjectSchema =
  Schema;
