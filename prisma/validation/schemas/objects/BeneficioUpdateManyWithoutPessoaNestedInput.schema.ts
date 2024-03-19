import { z } from 'zod';
import { BeneficioCreateWithoutPessoaInputObjectSchema } from './BeneficioCreateWithoutPessoaInput.schema';
import { BeneficioUncheckedCreateWithoutPessoaInputObjectSchema } from './BeneficioUncheckedCreateWithoutPessoaInput.schema';
import { BeneficioCreateOrConnectWithoutPessoaInputObjectSchema } from './BeneficioCreateOrConnectWithoutPessoaInput.schema';
import { BeneficioUpsertWithWhereUniqueWithoutPessoaInputObjectSchema } from './BeneficioUpsertWithWhereUniqueWithoutPessoaInput.schema';
import { BeneficioCreateManyPessoaInputEnvelopeObjectSchema } from './BeneficioCreateManyPessoaInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';
import { BeneficioUpdateWithWhereUniqueWithoutPessoaInputObjectSchema } from './BeneficioUpdateWithWhereUniqueWithoutPessoaInput.schema';
import { BeneficioUpdateManyWithWhereWithoutPessoaInputObjectSchema } from './BeneficioUpdateManyWithWhereWithoutPessoaInput.schema';
import { BeneficioScalarWhereInputObjectSchema } from './BeneficioScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioUpdateManyWithoutPessoaNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BeneficioCreateWithoutPessoaInputObjectSchema),
        z.lazy(() => BeneficioCreateWithoutPessoaInputObjectSchema).array(),
        z.lazy(() => BeneficioUncheckedCreateWithoutPessoaInputObjectSchema),
        z
          .lazy(() => BeneficioUncheckedCreateWithoutPessoaInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => BeneficioCreateOrConnectWithoutPessoaInputObjectSchema),
        z
          .lazy(() => BeneficioCreateOrConnectWithoutPessoaInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => BeneficioUpsertWithWhereUniqueWithoutPessoaInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficioUpsertWithWhereUniqueWithoutPessoaInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => BeneficioCreateManyPessoaInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => BeneficioUpdateWithWhereUniqueWithoutPessoaInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficioUpdateWithWhereUniqueWithoutPessoaInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => BeneficioUpdateManyWithWhereWithoutPessoaInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficioUpdateManyWithWhereWithoutPessoaInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => BeneficioScalarWhereInputObjectSchema),
        z.lazy(() => BeneficioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BeneficioUpdateManyWithoutPessoaNestedInputObjectSchema = Schema;
