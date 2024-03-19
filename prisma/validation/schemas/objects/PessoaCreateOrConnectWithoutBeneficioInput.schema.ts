import { z } from 'zod';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';
import { PessoaCreateWithoutBeneficioInputObjectSchema } from './PessoaCreateWithoutBeneficioInput.schema';
import { PessoaUncheckedCreateWithoutBeneficioInputObjectSchema } from './PessoaUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateOrConnectWithoutBeneficioInput> = z
  .object({
    where: z.lazy(() => PessoaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PessoaCreateWithoutBeneficioInputObjectSchema),
      z.lazy(() => PessoaUncheckedCreateWithoutBeneficioInputObjectSchema),
    ]),
  })
  .strict();

export const PessoaCreateOrConnectWithoutBeneficioInputObjectSchema = Schema;
