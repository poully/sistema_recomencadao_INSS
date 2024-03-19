import { z } from 'zod';
import { EstadoOrderByWithRelationInputObjectSchema } from './objects/EstadoOrderByWithRelationInput.schema';
import { EstadoWhereInputObjectSchema } from './objects/EstadoWhereInput.schema';
import { EstadoWhereUniqueInputObjectSchema } from './objects/EstadoWhereUniqueInput.schema';
import { EstadoCountAggregateInputObjectSchema } from './objects/EstadoCountAggregateInput.schema';
import { EstadoMinAggregateInputObjectSchema } from './objects/EstadoMinAggregateInput.schema';
import { EstadoMaxAggregateInputObjectSchema } from './objects/EstadoMaxAggregateInput.schema';
import { EstadoAvgAggregateInputObjectSchema } from './objects/EstadoAvgAggregateInput.schema';
import { EstadoSumAggregateInputObjectSchema } from './objects/EstadoSumAggregateInput.schema';

export const EstadoAggregateSchema = z.object({
  orderBy: z
    .union([
      EstadoOrderByWithRelationInputObjectSchema,
      EstadoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EstadoWhereInputObjectSchema.optional(),
  cursor: EstadoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), EstadoCountAggregateInputObjectSchema])
    .optional(),
  _min: EstadoMinAggregateInputObjectSchema.optional(),
  _max: EstadoMaxAggregateInputObjectSchema.optional(),
  _avg: EstadoAvgAggregateInputObjectSchema.optional(),
  _sum: EstadoSumAggregateInputObjectSchema.optional(),
});
