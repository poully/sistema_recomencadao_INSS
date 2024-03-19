import { z } from 'zod';
import { PessoaCreateWithoutBeneficioInputObjectSchema } from './PessoaCreateWithoutBeneficioInput.schema';
import { PessoaUncheckedCreateWithoutBeneficioInputObjectSchema } from './PessoaUncheckedCreateWithoutBeneficioInput.schema';
import { PessoaCreateOrConnectWithoutBeneficioInputObjectSchema } from './PessoaCreateOrConnectWithoutBeneficioInput.schema';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateNestedOneWithoutBeneficioInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PessoaCreateWithoutBeneficioInputObjectSchema),
        z.lazy(() => PessoaUncheckedCreateWithoutBeneficioInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PessoaCreateOrConnectWithoutBeneficioInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PessoaWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PessoaCreateNestedOneWithoutBeneficioInputObjectSchema = Schema;
