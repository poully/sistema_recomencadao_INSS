import { z } from 'zod';
import { BeneficioCreateNestedManyWithoutSituacaoInputObjectSchema } from './BeneficioCreateNestedManyWithoutSituacaoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoCreateInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
    Beneficio: z
      .lazy(() => BeneficioCreateNestedManyWithoutSituacaoInputObjectSchema)
      .optional(),
  })
  .strict();

export const SituacaoCreateInputObjectSchema = Schema;
