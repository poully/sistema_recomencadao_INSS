import { z } from 'zod';
import { PessoaCreateWithoutCidadeInputObjectSchema } from './PessoaCreateWithoutCidadeInput.schema';
import { PessoaUncheckedCreateWithoutCidadeInputObjectSchema } from './PessoaUncheckedCreateWithoutCidadeInput.schema';
import { PessoaCreateOrConnectWithoutCidadeInputObjectSchema } from './PessoaCreateOrConnectWithoutCidadeInput.schema';
import { PessoaCreateManyCidadeInputEnvelopeObjectSchema } from './PessoaCreateManyCidadeInputEnvelope.schema';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUncheckedCreateNestedManyWithoutCidadeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PessoaCreateWithoutCidadeInputObjectSchema),
          z.lazy(() => PessoaCreateWithoutCidadeInputObjectSchema).array(),
          z.lazy(() => PessoaUncheckedCreateWithoutCidadeInputObjectSchema),
          z
            .lazy(() => PessoaUncheckedCreateWithoutCidadeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PessoaCreateOrConnectWithoutCidadeInputObjectSchema),
          z
            .lazy(() => PessoaCreateOrConnectWithoutCidadeInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PessoaCreateManyCidadeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PessoaWhereUniqueInputObjectSchema),
          z.lazy(() => PessoaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PessoaUncheckedCreateNestedManyWithoutCidadeInputObjectSchema =
  Schema;
