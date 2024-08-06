import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BeneficioListRelationFilterObjectSchema } from './BeneficioListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EspecialistaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EspecialistaWhereInputObjectSchema),
        z.lazy(() => EspecialistaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EspecialistaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EspecialistaWhereInputObjectSchema),
        z.lazy(() => EspecialistaWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    nome: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    telefone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    endereco: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cidade: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    uf: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    beneficio: z.lazy(() => BeneficioListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const EspecialistaWhereInputObjectSchema = Schema;
