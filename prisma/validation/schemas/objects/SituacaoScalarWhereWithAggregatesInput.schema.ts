import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SituacaoScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => SituacaoScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SituacaoScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SituacaoScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => SituacaoScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    nome: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const SituacaoScalarWhereWithAggregatesInputObjectSchema = Schema;
