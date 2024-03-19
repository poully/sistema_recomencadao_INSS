import { z } from 'zod';
import { PessoaScalarWhereInputObjectSchema } from './PessoaScalarWhereInput.schema';
import { PessoaUpdateManyMutationInputObjectSchema } from './PessoaUpdateManyMutationInput.schema';
import { PessoaUncheckedUpdateManyWithoutPessoaInputObjectSchema } from './PessoaUncheckedUpdateManyWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUpdateManyWithWhereWithoutCidadeInput> = z
  .object({
    where: z.lazy(() => PessoaScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PessoaUpdateManyMutationInputObjectSchema),
      z.lazy(() => PessoaUncheckedUpdateManyWithoutPessoaInputObjectSchema),
    ]),
  })
  .strict();

export const PessoaUpdateManyWithWhereWithoutCidadeInputObjectSchema = Schema;
