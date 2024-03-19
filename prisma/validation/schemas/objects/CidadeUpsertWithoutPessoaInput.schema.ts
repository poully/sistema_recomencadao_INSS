import { z } from 'zod';
import { CidadeUpdateWithoutPessoaInputObjectSchema } from './CidadeUpdateWithoutPessoaInput.schema';
import { CidadeUncheckedUpdateWithoutPessoaInputObjectSchema } from './CidadeUncheckedUpdateWithoutPessoaInput.schema';
import { CidadeCreateWithoutPessoaInputObjectSchema } from './CidadeCreateWithoutPessoaInput.schema';
import { CidadeUncheckedCreateWithoutPessoaInputObjectSchema } from './CidadeUncheckedCreateWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUpsertWithoutPessoaInput> = z
  .object({
    update: z.union([
      z.lazy(() => CidadeUpdateWithoutPessoaInputObjectSchema),
      z.lazy(() => CidadeUncheckedUpdateWithoutPessoaInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CidadeCreateWithoutPessoaInputObjectSchema),
      z.lazy(() => CidadeUncheckedCreateWithoutPessoaInputObjectSchema),
    ]),
  })
  .strict();

export const CidadeUpsertWithoutPessoaInputObjectSchema = Schema;
