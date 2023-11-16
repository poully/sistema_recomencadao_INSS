import { z } from 'zod';
import { AuxilioMaternidadeWhereInputObjectSchema } from './AuxilioMaternidadeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeListRelationFilter> = z
  .object({
    every: z.lazy(() => AuxilioMaternidadeWhereInputObjectSchema).optional(),
    some: z.lazy(() => AuxilioMaternidadeWhereInputObjectSchema).optional(),
    none: z.lazy(() => AuxilioMaternidadeWhereInputObjectSchema).optional(),
  })
  .strict();

export const AuxilioMaternidadeListRelationFilterObjectSchema = Schema;
