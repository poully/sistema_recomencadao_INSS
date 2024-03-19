import { z } from 'zod';
import { BeneficioCreateWithoutPessoaInputObjectSchema } from './BeneficioCreateWithoutPessoaInput.schema';
import { BeneficioUncheckedCreateWithoutPessoaInputObjectSchema } from './BeneficioUncheckedCreateWithoutPessoaInput.schema';
import { BeneficioCreateOrConnectWithoutPessoaInputObjectSchema } from './BeneficioCreateOrConnectWithoutPessoaInput.schema';
import { BeneficioCreateManyPessoaInputEnvelopeObjectSchema } from './BeneficioCreateManyPessoaInputEnvelope.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './BeneficioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioCreateNestedManyWithoutPessoaInput> = z
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
    createMany: z
      .lazy(() => BeneficioCreateManyPessoaInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema),
        z.lazy(() => BeneficioWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const BeneficioCreateNestedManyWithoutPessoaInputObjectSchema = Schema;
