import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const EspecialistaWhereUniqueInputObjectSchema = Schema;
