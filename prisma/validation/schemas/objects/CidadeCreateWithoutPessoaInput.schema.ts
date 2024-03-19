import { z } from 'zod';
import { EstadoCreateNestedOneWithoutCidadeInputObjectSchema } from './EstadoCreateNestedOneWithoutCidadeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeCreateWithoutPessoaInput> = z
  .object({
    id: z.number(),
    nome: z.string(),
    estado: z.lazy(() => EstadoCreateNestedOneWithoutCidadeInputObjectSchema),
  })
  .strict();

export const CidadeCreateWithoutPessoaInputObjectSchema = Schema;
