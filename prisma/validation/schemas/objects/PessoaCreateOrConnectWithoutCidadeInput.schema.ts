import { z } from 'zod';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';
import { PessoaCreateWithoutCidadeInputObjectSchema } from './PessoaCreateWithoutCidadeInput.schema';
import { PessoaUncheckedCreateWithoutCidadeInputObjectSchema } from './PessoaUncheckedCreateWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaCreateOrConnectWithoutCidadeInput> = z
  .object({
    where: z.lazy(() => PessoaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PessoaCreateWithoutCidadeInputObjectSchema),
      z.lazy(() => PessoaUncheckedCreateWithoutCidadeInputObjectSchema),
    ]),
  })
  .strict();

export const PessoaCreateOrConnectWithoutCidadeInputObjectSchema = Schema;
