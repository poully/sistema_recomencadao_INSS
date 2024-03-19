import { z } from 'zod';
import { PessoaCreateWithoutBeneficioInputObjectSchema } from './PessoaCreateWithoutBeneficioInput.schema';
import { PessoaUncheckedCreateWithoutBeneficioInputObjectSchema } from './PessoaUncheckedCreateWithoutBeneficioInput.schema';
import { PessoaCreateOrConnectWithoutBeneficioInputObjectSchema } from './PessoaCreateOrConnectWithoutBeneficioInput.schema';
import { PessoaUpsertWithoutBeneficioInputObjectSchema } from './PessoaUpsertWithoutBeneficioInput.schema';
import { PessoaWhereUniqueInputObjectSchema } from './PessoaWhereUniqueInput.schema';
import { PessoaUpdateWithoutBeneficioInputObjectSchema } from './PessoaUpdateWithoutBeneficioInput.schema';
import { PessoaUncheckedUpdateWithoutBeneficioInputObjectSchema } from './PessoaUncheckedUpdateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUpdateOneRequiredWithoutBeneficioNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PessoaCreateWithoutBeneficioInputObjectSchema),
          z.lazy(() => PessoaUncheckedCreateWithoutBeneficioInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PessoaCreateOrConnectWithoutBeneficioInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PessoaUpsertWithoutBeneficioInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PessoaWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PessoaUpdateWithoutBeneficioInputObjectSchema),
          z.lazy(() => PessoaUncheckedUpdateWithoutBeneficioInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PessoaUpdateOneRequiredWithoutBeneficioNestedInputObjectSchema =
  Schema;
