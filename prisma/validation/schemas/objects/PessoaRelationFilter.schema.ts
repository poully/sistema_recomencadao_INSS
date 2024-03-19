import { z } from 'zod';
import { PessoaWhereInputObjectSchema } from './PessoaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaRelationFilter> = z
  .object({
    is: z
      .lazy(() => PessoaWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PessoaWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PessoaRelationFilterObjectSchema = Schema;
