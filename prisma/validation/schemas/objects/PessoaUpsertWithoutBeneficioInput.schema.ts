import { z } from 'zod';
import { PessoaUpdateWithoutBeneficioInputObjectSchema } from './PessoaUpdateWithoutBeneficioInput.schema';
import { PessoaUncheckedUpdateWithoutBeneficioInputObjectSchema } from './PessoaUncheckedUpdateWithoutBeneficioInput.schema';
import { PessoaCreateWithoutBeneficioInputObjectSchema } from './PessoaCreateWithoutBeneficioInput.schema';
import { PessoaUncheckedCreateWithoutBeneficioInputObjectSchema } from './PessoaUncheckedCreateWithoutBeneficioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaUpsertWithoutBeneficioInput> = z
  .object({
    update: z.union([
      z.lazy(() => PessoaUpdateWithoutBeneficioInputObjectSchema),
      z.lazy(() => PessoaUncheckedUpdateWithoutBeneficioInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PessoaCreateWithoutBeneficioInputObjectSchema),
      z.lazy(() => PessoaUncheckedCreateWithoutBeneficioInputObjectSchema),
    ]),
  })
  .strict();

export const PessoaUpsertWithoutBeneficioInputObjectSchema = Schema;
