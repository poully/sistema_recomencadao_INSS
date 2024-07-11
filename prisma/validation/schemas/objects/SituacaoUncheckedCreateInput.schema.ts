import { z } from 'zod';
import { BeneficioUncheckedCreateNestedManyWithoutSituacaoInputObjectSchema } from './BeneficioUncheckedCreateNestedManyWithoutSituacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
    Beneficio: z
      .lazy(
        () =>
          BeneficioUncheckedCreateNestedManyWithoutSituacaoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SituacaoUncheckedCreateInputObjectSchema = Schema;
