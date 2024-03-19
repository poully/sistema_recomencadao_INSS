import { z } from 'zod';
import { CidadeCreateNestedManyWithoutEstadoInputObjectSchema } from './CidadeCreateNestedManyWithoutEstadoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    Cidade: z
      .lazy(() => CidadeCreateNestedManyWithoutEstadoInputObjectSchema)
      .optional(),
  })
  .strict();

export const EstadoCreateInputObjectSchema = Schema;
