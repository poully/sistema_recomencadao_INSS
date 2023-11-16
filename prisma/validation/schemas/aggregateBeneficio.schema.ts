import { z } from 'zod';
import { BeneficioOrderByWithRelationInputObjectSchema } from './objects/BeneficioOrderByWithRelationInput.schema';
import { BeneficioWhereInputObjectSchema } from './objects/BeneficioWhereInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './objects/BeneficioWhereUniqueInput.schema';
import { BeneficioCountAggregateInputObjectSchema } from './objects/BeneficioCountAggregateInput.schema';
import { BeneficioMinAggregateInputObjectSchema } from './objects/BeneficioMinAggregateInput.schema';
import { BeneficioMaxAggregateInputObjectSchema } from './objects/BeneficioMaxAggregateInput.schema';
import { BeneficioAvgAggregateInputObjectSchema } from './objects/BeneficioAvgAggregateInput.schema';
import { BeneficioSumAggregateInputObjectSchema } from './objects/BeneficioSumAggregateInput.schema';

export const BeneficioAggregateSchema = z.object({
  orderBy: z
    .union([
      BeneficioOrderByWithRelationInputObjectSchema,
      BeneficioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficioWhereInputObjectSchema.optional(),
  cursor: BeneficioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BeneficioCountAggregateInputObjectSchema])
    .optional(),
  _min: BeneficioMinAggregateInputObjectSchema.optional(),
  _max: BeneficioMaxAggregateInputObjectSchema.optional(),
  _avg: BeneficioAvgAggregateInputObjectSchema.optional(),
  _sum: BeneficioSumAggregateInputObjectSchema.optional(),
});
