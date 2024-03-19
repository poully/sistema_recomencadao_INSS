import { z } from 'zod';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';
import { CidadeCreateWithoutPessoaInputObjectSchema } from './CidadeCreateWithoutPessoaInput.schema';
import { CidadeUncheckedCreateWithoutPessoaInputObjectSchema } from './CidadeUncheckedCreateWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateOrConnectWithoutPessoaInput> = z
  .object({
    where: z.lazy(() => CidadeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CidadeCreateWithoutPessoaInputObjectSchema),
      z.lazy(() => CidadeUncheckedCreateWithoutPessoaInputObjectSchema),
    ]),
  })
  .strict();

export const CidadeCreateOrConnectWithoutPessoaInputObjectSchema = Schema;
