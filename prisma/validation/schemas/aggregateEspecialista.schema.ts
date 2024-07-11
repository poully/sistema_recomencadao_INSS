import { z } from 'zod';
import { EspecialistaOrderByWithRelationInputObjectSchema } from './objects/EspecialistaOrderByWithRelationInput.schema';
import { EspecialistaWhereInputObjectSchema } from './objects/EspecialistaWhereInput.schema';
import { EspecialistaWhereUniqueInputObjectSchema } from './objects/EspecialistaWhereUniqueInput.schema';
import { EspecialistaCountAggregateInputObjectSchema } from './objects/EspecialistaCountAggregateInput.schema';
import { EspecialistaMinAggregateInputObjectSchema } from './objects/EspecialistaMinAggregateInput.schema';
import { EspecialistaMaxAggregateInputObjectSchema } from './objects/EspecialistaMaxAggregateInput.schema';

export const EspecialistaAggregateSchema = z.object({
  orderBy: z
    .union([
      EspecialistaOrderByWithRelationInputObjectSchema,
      EspecialistaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EspecialistaWhereInputObjectSchema.optional(),
  cursor: EspecialistaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), EspecialistaCountAggregateInputObjectSchema])
    .optional(),
  _min: EspecialistaMinAggregateInputObjectSchema.optional(),
  _max: EspecialistaMaxAggregateInputObjectSchema.optional(),
});
