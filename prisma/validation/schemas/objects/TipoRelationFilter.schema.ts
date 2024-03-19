import { z } from 'zod';
import { TipoWhereInputObjectSchema } from './TipoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoRelationFilter> = z
  .object({
    is: z
      .lazy(() => TipoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TipoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TipoRelationFilterObjectSchema = Schema;
