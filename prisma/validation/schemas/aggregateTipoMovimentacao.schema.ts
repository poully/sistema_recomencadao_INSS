import { z } from 'zod';
import { TipoMovimentacaoOrderByWithRelationInputObjectSchema } from './objects/TipoMovimentacaoOrderByWithRelationInput.schema';
import { TipoMovimentacaoWhereInputObjectSchema } from './objects/TipoMovimentacaoWhereInput.schema';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './objects/TipoMovimentacaoWhereUniqueInput.schema';
import { TipoMovimentacaoCountAggregateInputObjectSchema } from './objects/TipoMovimentacaoCountAggregateInput.schema';
import { TipoMovimentacaoMinAggregateInputObjectSchema } from './objects/TipoMovimentacaoMinAggregateInput.schema';
import { TipoMovimentacaoMaxAggregateInputObjectSchema } from './objects/TipoMovimentacaoMaxAggregateInput.schema';

export const TipoMovimentacaoAggregateSchema = z.object({
  orderBy: z
    .union([
      TipoMovimentacaoOrderByWithRelationInputObjectSchema,
      TipoMovimentacaoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TipoMovimentacaoWhereInputObjectSchema.optional(),
  cursor: TipoMovimentacaoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TipoMovimentacaoCountAggregateInputObjectSchema])
    .optional(),
  _min: TipoMovimentacaoMinAggregateInputObjectSchema.optional(),
  _max: TipoMovimentacaoMaxAggregateInputObjectSchema.optional(),
});
