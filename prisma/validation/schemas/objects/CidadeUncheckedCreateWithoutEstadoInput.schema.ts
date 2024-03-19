import { z } from 'zod';
import { PessoaUncheckedCreateNestedManyWithoutCidadeInputObjectSchema } from './PessoaUncheckedCreateNestedManyWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUncheckedCreateWithoutEstadoInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    Pessoa: z
      .lazy(() => PessoaUncheckedCreateNestedManyWithoutCidadeInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeUncheckedCreateWithoutEstadoInputObjectSchema = Schema;
