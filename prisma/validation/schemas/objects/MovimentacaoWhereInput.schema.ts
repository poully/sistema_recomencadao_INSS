import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { BeneficioRelationFilterObjectSchema } from './BeneficioRelationFilter.schema';
import { BeneficioWhereInputObjectSchema } from './BeneficioWhereInput.schema';
import { TipoMovimentacaoRelationFilterObjectSchema } from './TipoMovimentacaoRelationFilter.schema';
import { TipoMovimentacaoWhereInputObjectSchema } from './TipoMovimentacaoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentacaoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MovimentacaoWhereInputObjectSchema),
        z.lazy(() => MovimentacaoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MovimentacaoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MovimentacaoWhereInputObjectSchema),
        z.lazy(() => MovimentacaoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    tipo_movimentacao_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    beneficio_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    beneficio: z
      .union([
        z.lazy(() => BeneficioRelationFilterObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema),
      ])
      .optional(),
    tipo_movimentacao: z
      .union([
        z.lazy(() => TipoMovimentacaoRelationFilterObjectSchema),
        z.lazy(() => TipoMovimentacaoWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MovimentacaoWhereInputObjectSchema = Schema;
