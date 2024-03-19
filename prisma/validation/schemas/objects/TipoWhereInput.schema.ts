import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BeneficioListRelationFilterObjectSchema } from './BeneficioListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TipoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TipoWhereInputObjectSchema),
        z.lazy(() => TipoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TipoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TipoWhereInputObjectSchema),
        z.lazy(() => TipoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nome: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Beneficio: z.lazy(() => BeneficioListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TipoWhereInputObjectSchema = Schema;
