import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
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
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
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
    cidade_ibge_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Beneficio: z.lazy(() => BeneficioListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const EspecialistaWhereInputObjectSchema = Schema;
