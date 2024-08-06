import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { SituacaoRelationFilterObjectSchema } from './SituacaoRelationFilter.schema';
import { SituacaoWhereInputObjectSchema } from './SituacaoWhereInput.schema';
import { PessoaRelationFilterObjectSchema } from './PessoaRelationFilter.schema';
import { PessoaWhereInputObjectSchema } from './PessoaWhereInput.schema';
import { TipoRelationFilterObjectSchema } from './TipoRelationFilter.schema';
import { TipoWhereInputObjectSchema } from './TipoWhereInput.schema';
import { EspecialistaRelationFilterObjectSchema } from './EspecialistaRelationFilter.schema';
import { EspecialistaWhereInputObjectSchema } from './EspecialistaWhereInput.schema';
import { DocumentosListRelationFilterObjectSchema } from './DocumentosListRelationFilter.schema';
import { MovimentacaoListRelationFilterObjectSchema } from './MovimentacaoListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BeneficioWhereInputObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BeneficioWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BeneficioWhereInputObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    numero_beneficio: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    situacao_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    pessoa_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    tipo_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    especialista_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    situacao: z
      .union([
        z.lazy(() => SituacaoRelationFilterObjectSchema),
        z.lazy(() => SituacaoWhereInputObjectSchema),
      ])
      .optional(),
    pessoa: z
      .union([
        z.lazy(() => PessoaRelationFilterObjectSchema),
        z.lazy(() => PessoaWhereInputObjectSchema),
      ])
      .optional(),
    tipo: z
      .union([
        z.lazy(() => TipoRelationFilterObjectSchema),
        z.lazy(() => TipoWhereInputObjectSchema),
      ])
      .optional(),
    especialista: z
      .union([
        z.lazy(() => EspecialistaRelationFilterObjectSchema),
        z.lazy(() => EspecialistaWhereInputObjectSchema),
      ])
      .optional(),
    documentos: z
      .lazy(() => DocumentosListRelationFilterObjectSchema)
      .optional(),
    movimentacao: z
      .lazy(() => MovimentacaoListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioWhereInputObjectSchema = Schema;
