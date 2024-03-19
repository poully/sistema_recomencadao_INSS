import { z } from 'zod';
import { CidadeCreateWithoutPessoaInputObjectSchema } from './CidadeCreateWithoutPessoaInput.schema';
import { CidadeUncheckedCreateWithoutPessoaInputObjectSchema } from './CidadeUncheckedCreateWithoutPessoaInput.schema';
import { CidadeCreateOrConnectWithoutPessoaInputObjectSchema } from './CidadeCreateOrConnectWithoutPessoaInput.schema';
import { CidadeUpsertWithoutPessoaInputObjectSchema } from './CidadeUpsertWithoutPessoaInput.schema';
import { CidadeWhereUniqueInputObjectSchema } from './CidadeWhereUniqueInput.schema';
import { CidadeUpdateWithoutPessoaInputObjectSchema } from './CidadeUpdateWithoutPessoaInput.schema';
import { CidadeUncheckedUpdateWithoutPessoaInputObjectSchema } from './CidadeUncheckedUpdateWithoutPessoaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUpdateOneRequiredWithoutPessoaNestedInput> =
  z
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
      upsert: z
        .lazy(() => CidadeUpsertWithoutPessoaInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CidadeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CidadeUpdateWithoutPessoaInputObjectSchema),
          z.lazy(() => CidadeUncheckedUpdateWithoutPessoaInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CidadeUpdateOneRequiredWithoutPessoaNestedInputObjectSchema =
  Schema;
