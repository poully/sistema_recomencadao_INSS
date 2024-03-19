import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioCreateWithoutPessoaInputObjectSchema } from './BeneficioCreateWithoutPessoaInput.schema';
import { BeneficioUncheckedCreateWithoutPessoaInputObjectSchema } from './BeneficioUncheckedCreateWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateOrConnectWithoutPessoaInput> = z
  .object({
    where: z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BeneficioCreateWithoutPessoaInputObjectSchema),
      z.lazy(() => BeneficioUncheckedCreateWithoutPessoaInputObjectSchema),
    ]),
  })
  .strict();

export const BeneficioCreateOrConnectWithoutPessoaInputObjectSchema = Schema;
