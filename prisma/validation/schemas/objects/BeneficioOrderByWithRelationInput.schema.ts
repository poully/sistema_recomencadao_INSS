import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SituacaoOrderByWithRelationInputObjectSchema } from './SituacaoOrderByWithRelationInput.schema';
import { PessoaOrderByWithRelationInputObjectSchema } from './PessoaOrderByWithRelationInput.schema';
import { TipoOrderByWithRelationInputObjectSchema } from './TipoOrderByWithRelationInput.schema';
import { EspecialistaOrderByWithRelationInputObjectSchema } from './EspecialistaOrderByWithRelationInput.schema';
import { DocumentosOrderByRelationAggregateInputObjectSchema } from './DocumentosOrderByRelationAggregateInput.schema';
import { MovimentacaoOrderByRelationAggregateInputObjectSchema } from './MovimentacaoOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficioOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    numero_beneficio: z.lazy(() => SortOrderSchema).optional(),
    situacao_id: z.lazy(() => SortOrderSchema).optional(),
    pessoa_id: z.lazy(() => SortOrderSchema).optional(),
    tipo_id: z.lazy(() => SortOrderSchema).optional(),
    especialista_id: z.lazy(() => SortOrderSchema).optional(),
    situacao: z
      .lazy(() => SituacaoOrderByWithRelationInputObjectSchema)
      .optional(),
    pessoa: z.lazy(() => PessoaOrderByWithRelationInputObjectSchema).optional(),
    tipo: z.lazy(() => TipoOrderByWithRelationInputObjectSchema).optional(),
    especialista: z
      .lazy(() => EspecialistaOrderByWithRelationInputObjectSchema)
      .optional(),
    documentos: z
      .lazy(() => DocumentosOrderByRelationAggregateInputObjectSchema)
      .optional(),
    movimentacao: z
      .lazy(() => MovimentacaoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BeneficioOrderByWithRelationInputObjectSchema = Schema;
