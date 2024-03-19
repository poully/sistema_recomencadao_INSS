import { z } from 'zod';
import { EstadoCreateNestedOneWithoutCidadeInputObjectSchema } from './EstadoCreateNestedOneWithoutCidadeInput.schema';
import { PessoaCreateNestedManyWithoutCidadeInputObjectSchema } from './PessoaCreateNestedManyWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    estado: z.lazy(() => EstadoCreateNestedOneWithoutCidadeInputObjectSchema),
    Pessoa: z
      .lazy(() => PessoaCreateNestedManyWithoutCidadeInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeCreateInputObjectSchema = Schema;
