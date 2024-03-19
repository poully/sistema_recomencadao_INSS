import { z } from 'zod';
import { CidadeCreateWithoutPessoaInputObjectSchema } from './CidadeCreateWithoutPessoaInput.schema';
import { CidadeUncheckedCreateWithoutPessoaInputObjectSchema } from './CidadeUncheckedCreateWithoutPessoaInput.schema';
import { CidadeCreateOrConnectWithoutPessoaInputObjectSchema } from './CidadeCreateOrConnectWithoutPessoaInput.schema';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateNestedOneWithoutPessoaInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CidadeCreateWithoutPessoaInputObjectSchema),
        z.lazy(() => CidadeUncheckedCreateWithoutPessoaInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CidadeCreateOrConnectWithoutPessoaInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CidadeWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CidadeCreateNestedOneWithoutPessoaInputObjectSchema = Schema;
