import { z } from 'zod';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';
import { PessoaUpdateWithoutCidadeInputObjectSchema } from './PessoaUpdateWithoutCidadeInput.schema';
import { PessoaUncheckedUpdateWithoutCidadeInputObjectSchema } from './PessoaUncheckedUpdateWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUpdateWithWhereUniqueWithoutCidadeInput> =
  z
    .object({
      where: z.lazy(() => PessoaWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PessoaUpdateWithoutCidadeInputObjectSchema),
        z.lazy(() => PessoaUncheckedUpdateWithoutCidadeInputObjectSchema),
      ]),
    })
    .strict();

export const PessoaUpdateWithWhereUniqueWithoutCidadeInputObjectSchema = Schema;
