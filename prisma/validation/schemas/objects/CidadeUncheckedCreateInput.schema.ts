import { z } from 'zod';
import { PessoaUncheckedCreateNestedManyWithoutCidadeInputObjectSchema } from './PessoaUncheckedCreateNestedManyWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeUncheckedCreateInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    estado_id: z.number(),
    Pessoa: z
      .lazy(() => PessoaUncheckedCreateNestedManyWithoutCidadeInputObjectSchema)
      .optional(),
  })
  .strict();

export const CidadeUncheckedCreateInputObjectSchema = Schema;
