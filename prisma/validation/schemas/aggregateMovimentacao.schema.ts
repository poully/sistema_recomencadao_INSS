import { z } from 'zod';
import { MovimentacaoOrderByWithRelationInputObjectSchema } from './objects/MovimentacaoOrderByWithRelationInput.schema';
import { MovimentacaoWhereInputObjectSchema } from './objects/MovimentacaoWhereInput.schema';
import { MovimentacaoWhereUniqueInputObjectSchema } from './objects/MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoCountAggregateInputObjectSchema } from './objects/MovimentacaoCountAggregateInput.schema';
import { MovimentacaoMinAggregateInputObjectSchema } from './objects/MovimentacaoMinAggregateInput.schema';
import { MovimentacaoMaxAggregateInputObjectSchema } from './objects/MovimentacaoMaxAggregateInput.schema';
import { MovimentacaoAvgAggregateInputObjectSchema } from './objects/MovimentacaoAvgAggregateInput.schema';
import { MovimentacaoSumAggregateInputObjectSchema } from './objects/MovimentacaoSumAggregateInput.schema';

export const MovimentacaoAggregateSchema = z.object({
  orderBy: z
    .union([
      MovimentacaoOrderByWithRelationInputObjectSchema,
      MovimentacaoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MovimentacaoWhereInputObjectSchema.optional(),
  cursor: MovimentacaoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MovimentacaoCountAggregateInputObjectSchema])
    .optional(),
  _min: MovimentacaoMinAggregateInputObjectSchema.optional(),
  _max: MovimentacaoMaxAggregateInputObjectSchema.optional(),
  _avg: MovimentacaoAvgAggregateInputObjectSchema.optional(),
  _sum: MovimentacaoSumAggregateInputObjectSchema.optional(),
});
