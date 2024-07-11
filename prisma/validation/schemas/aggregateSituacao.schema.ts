import { z } from 'zod';
import { SituacaoOrderByWithRelationInputObjectSchema } from './objects/SituacaoOrderByWithRelationInput.schema';
import { SituacaoWhereInputObjectSchema } from './objects/SituacaoWhereInput.schema';
import { SituacaoWhereUniqueInputObjectSchema } from './objects/SituacaoWhereUniqueInput.schema';
import { SituacaoCountAggregateInputObjectSchema } from './objects/SituacaoCountAggregateInput.schema';
import { SituacaoMinAggregateInputObjectSchema } from './objects/SituacaoMinAggregateInput.schema';
import { SituacaoMaxAggregateInputObjectSchema } from './objects/SituacaoMaxAggregateInput.schema';

export const SituacaoAggregateSchema = z.object({
  orderBy: z
    .union([
      SituacaoOrderByWithRelationInputObjectSchema,
      SituacaoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SituacaoWhereInputObjectSchema.optional(),
  cursor: SituacaoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SituacaoCountAggregateInputObjectSchema])
    .optional(),
  _min: SituacaoMinAggregateInputObjectSchema.optional(),
  _max: SituacaoMaxAggregateInputObjectSchema.optional(),
});
