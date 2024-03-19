import { z } from 'zod';
import { EstadoWhereInputObjectSchema } from './EstadoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EstadoRelationFilter> = z
  .object({
    is: z
      .lazy(() => EstadoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EstadoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EstadoRelationFilterObjectSchema = Schema;
