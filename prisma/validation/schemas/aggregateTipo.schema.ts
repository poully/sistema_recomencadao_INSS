import { z } from 'zod';
import { TipoOrderByWithRelationInputObjectSchema } from './objects/TipoOrderByWithRelationInput.schema';
import { TipoWhereInputObjectSchema } from './objects/TipoWhereInput.schema';
import { TipoWhereUniqueInputObjectSchema } from './objects/TipoWhereUniqueInput.schema';
import { TipoCountAggregateInputObjectSchema } from './objects/TipoCountAggregateInput.schema';
import { TipoMinAggregateInputObjectSchema } from './objects/TipoMinAggregateInput.schema';
import { TipoMaxAggregateInputObjectSchema } from './objects/TipoMaxAggregateInput.schema';
import { TipoAvgAggregateInputObjectSchema } from './objects/TipoAvgAggregateInput.schema';
import { TipoSumAggregateInputObjectSchema } from './objects/TipoSumAggregateInput.schema';

export const TipoAggregateSchema = z.object({
  orderBy: z
    .union([
      TipoOrderByWithRelationInputObjectSchema,
      TipoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TipoWhereInputObjectSchema.optional(),
  cursor: TipoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TipoCountAggregateInputObjectSchema])
    .optional(),
  _min: TipoMinAggregateInputObjectSchema.optional(),
  _max: TipoMaxAggregateInputObjectSchema.optional(),
  _avg: TipoAvgAggregateInputObjectSchema.optional(),
  _sum: TipoSumAggregateInputObjectSchema.optional(),
});
