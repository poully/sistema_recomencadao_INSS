import { z } from 'zod';
import { EspecialistaWhereInputObjectSchema } from './EspecialistaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaRelationFilter> = z
  .object({
    is: z
      .lazy(() => EspecialistaWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EspecialistaWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EspecialistaRelationFilterObjectSchema = Schema;
