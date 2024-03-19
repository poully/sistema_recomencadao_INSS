import { z } from 'zod';
import { PessoaWhereInputObjectSchema } from './PessoaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaListRelationFilter> = z
  .object({
    every: z.lazy(() => PessoaWhereInputObjectSchema).optional(),
    some: z.lazy(() => PessoaWhereInputObjectSchema).optional(),
    none: z.lazy(() => PessoaWhereInputObjectSchema).optional(),
  })
  .strict();

export const PessoaListRelationFilterObjectSchema = Schema;
