import { z } from 'zod';
import { PessoaCreateNestedManyWithoutCidadeInputObjectSchema } from './PessoaCreateNestedManyWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateWithoutEstadoInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    Pessoa: z
      .lazy(() => PessoaCreateNestedManyWithoutCidadeInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeCreateWithoutEstadoInputObjectSchema = Schema;
