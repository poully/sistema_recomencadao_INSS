import { z } from 'zod';
import { BeneficioUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from './BeneficioUncheckedCreateNestedManyWithoutTipoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoUncheckedCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    Beneficio: z
      .lazy(
        () => BeneficioUncheckedCreateNestedManyWithoutTipoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TipoUncheckedCreateInputObjectSchema = Schema;
