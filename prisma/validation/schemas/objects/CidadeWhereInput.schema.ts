import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EstadoRelationFilterObjectSchema } from './EstadoRelationFilter.schema';
import { EstadoWhereInputObjectSchema } from './EstadoWhereInput.schema';
import { PessoaListRelationFilterObjectSchema } from './PessoaListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CidadeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CidadeWhereInputObjectSchema),
        z.lazy(() => CidadeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CidadeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CidadeWhereInputObjectSchema),
        z.lazy(() => CidadeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nome: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    estado_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    estado: z
      .union([
        z.lazy(() => EstadoRelationFilterObjectSchema),
        z.lazy(() => EstadoWhereInputObjectSchema),
      ])
      .optional(),
    Pessoa: z.lazy(() => PessoaListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CidadeWhereInputObjectSchema = Schema;
