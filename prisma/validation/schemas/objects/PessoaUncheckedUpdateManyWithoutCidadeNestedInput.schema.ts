import { z } from 'zod';
import { PessoaCreateWithoutCidadeInputObjectSchema } from './PessoaCreateWithoutCidadeInput.schema';
import { PessoaUncheckedCreateWithoutCidadeInputObjectSchema } from './PessoaUncheckedCreateWithoutCidadeInput.schema';
import { PessoaCreateOrConnectWithoutCidadeInputObjectSchema } from './PessoaCreateOrConnectWithoutCidadeInput.schema';
import { PessoaUpsertWithWhereUniqueWithoutCidadeInputObjectSchema } from './PessoaUpsertWithWhereUniqueWithoutCidadeInput.schema';
import { PessoaCreateManyCidadeInputEnvelopeObjectSchema } from './PessoaCreateManyCidadeInputEnvelope.schema';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';
import { PessoaUpdateWithWhereUniqueWithoutCidadeInputObjectSchema } from './PessoaUpdateWithWhereUniqueWithoutCidadeInput.schema';
import { PessoaUpdateManyWithWhereWithoutCidadeInputObjectSchema } from './PessoaUpdateManyWithWhereWithoutCidadeInput.schema';
import { PessoaScalarWhereInputObjectSchema } from './PessoaScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUncheckedUpdateManyWithoutCidadeNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => PessoaUpsertWithWhereUniqueWithoutCidadeInputObjectSchema,
          ),
          z
            .lazy(
              () => PessoaUpsertWithWhereUniqueWithoutCidadeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PessoaCreateManyCidadeInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PessoaWhereUniqueInputObjectSchema),
          z.lazy(() => PessoaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PessoaWhereUniqueInputObjectSchema),
          z.lazy(() => PessoaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PessoaWhereUniqueInputObjectSchema),
          z.lazy(() => PessoaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PessoaWhereUniqueInputObjectSchema),
          z.lazy(() => PessoaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PessoaUpdateWithWhereUniqueWithoutCidadeInputObjectSchema,
          ),
          z
            .lazy(
              () => PessoaUpdateWithWhereUniqueWithoutCidadeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PessoaUpdateManyWithWhereWithoutCidadeInputObjectSchema),
          z
            .lazy(() => PessoaUpdateManyWithWhereWithoutCidadeInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PessoaScalarWhereInputObjectSchema),
          z.lazy(() => PessoaScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PessoaUncheckedUpdateManyWithoutCidadeNestedInputObjectSchema =
  Schema;
