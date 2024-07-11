import { z } from 'zod';
import { BeneficioCreateNestedManyWithoutTipoInputObjectSchema } from './BeneficioCreateNestedManyWithoutTipoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoCreateInput> = z
  .object({
    id: z.string().optional(),
    nome: z.string(),
    Beneficio: z
      .lazy(() => BeneficioCreateNestedManyWithoutTipoInputObjectSchema)
      .optional(),
  })
  .strict();

export const TipoCreateInputObjectSchema = Schema;
