import { z } from 'zod';
import { CidadeOrderByWithRelationInputObjectSchema } from './objects/CidadeOrderByWithRelationInput.schema';
import { CidadeWhereInputObjectSchema } from './objects/CidadeWhereInput.schema';
import { CidadeWhereUniqueInputObjectSchema } from './objects/CidadeWhereUniqueInput.schema';
import { CidadeCountAggregateInputObjectSchema } from './objects/CidadeCountAggregateInput.schema';
import { CidadeMinAggregateInputObjectSchema } from './objects/CidadeMinAggregateInput.schema';
import { CidadeMaxAggregateInputObjectSchema } from './objects/CidadeMaxAggregateInput.schema';
import { CidadeAvgAggregateInputObjectSchema } from './objects/CidadeAvgAggregateInput.schema';
import { CidadeSumAggregateInputObjectSchema } from './objects/CidadeSumAggregateInput.schema';

export const CidadeAggregateSchema = z.object({
  orderBy: z
    .union([
      CidadeOrderByWithRelationInputObjectSchema,
      CidadeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CidadeWhereInputObjectSchema.optional(),
  cursor: CidadeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CidadeCountAggregateInputObjectSchema])
    .optional(),
  _min: CidadeMinAggregateInputObjectSchema.optional(),
  _max: CidadeMaxAggregateInputObjectSchema.optional(),
  _avg: CidadeAvgAggregateInputObjectSchema.optional(),
  _sum: CidadeSumAggregateInputObjectSchema.optional(),
});
