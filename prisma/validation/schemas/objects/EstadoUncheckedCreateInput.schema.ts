import { z } from 'zod';
import { CidadeUncheckedCreateNestedManyWithoutEstadoInputObjectSchema } from './CidadeUncheckedCreateNestedManyWithoutEstadoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoUncheckedCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    Cidade: z
      .lazy(() => CidadeUncheckedCreateNestedManyWithoutEstadoInputObjectSchema)
      .optional(),
  })
  .strict();

export const EstadoUncheckedCreateInputObjectSchema = Schema;
