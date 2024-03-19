import { z } from 'zod';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';
import { PessoaUpdateWithoutCidadeInputObjectSchema } from './PessoaUpdateWithoutCidadeInput.schema';
import { PessoaUncheckedUpdateWithoutCidadeInputObjectSchema } from './PessoaUncheckedUpdateWithoutCidadeInput.schema';
import { PessoaCreateWithoutCidadeInputObjectSchema } from './PessoaCreateWithoutCidadeInput.schema';
import { PessoaUncheckedCreateWithoutCidadeInputObjectSchema } from './PessoaUncheckedCreateWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUpsertWithWhereUniqueWithoutCidadeInput> =
  z
    .object({
      where: z.lazy(() => PessoaWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PessoaUpdateWithoutCidadeInputObjectSchema),
        z.lazy(() => PessoaUncheckedUpdateWithoutCidadeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PessoaCreateWithoutCidadeInputObjectSchema),
        z.lazy(() => PessoaUncheckedCreateWithoutCidadeInputObjectSchema),
      ]),
    })
    .strict();

export const PessoaUpsertWithWhereUniqueWithoutCidadeInputObjectSchema = Schema;
