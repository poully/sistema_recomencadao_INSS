import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BeneficioListRelationFilterObjectSchema } from './BeneficioListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SituacaoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SituacaoWhereInputObjectSchema),
        z.lazy(() => SituacaoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SituacaoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SituacaoWhereInputObjectSchema),
        z.lazy(() => SituacaoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    nome: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Beneficio: z.lazy(() => BeneficioListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const SituacaoWhereInputObjectSchema = Schema;
