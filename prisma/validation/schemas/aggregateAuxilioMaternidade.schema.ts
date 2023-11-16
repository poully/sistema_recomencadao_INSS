import { z } from 'zod';
import { AuxilioMaternidadeOrderByWithRelationInputObjectSchema } from './objects/AuxilioMaternidadeOrderByWithRelationInput.schema';
import { AuxilioMaternidadeWhereInputObjectSchema } from './objects/AuxilioMaternidadeWhereInput.schema';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './objects/AuxilioMaternidadeWhereUniqueInput.schema';
import { AuxilioMaternidadeCountAggregateInputObjectSchema } from './objects/AuxilioMaternidadeCountAggregateInput.schema';
import { AuxilioMaternidadeMinAggregateInputObjectSchema } from './objects/AuxilioMaternidadeMinAggregateInput.schema';
import { AuxilioMaternidadeMaxAggregateInputObjectSchema } from './objects/AuxilioMaternidadeMaxAggregateInput.schema';
import { AuxilioMaternidadeAvgAggregateInputObjectSchema } from './objects/AuxilioMaternidadeAvgAggregateInput.schema';
import { AuxilioMaternidadeSumAggregateInputObjectSchema } from './objects/AuxilioMaternidadeSumAggregateInput.schema';

export const AuxilioMaternidadeAggregateSchema = z.object({
  orderBy: z
    .union([
      AuxilioMaternidadeOrderByWithRelationInputObjectSchema,
      AuxilioMaternidadeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AuxilioMaternidadeWhereInputObjectSchema.optional(),
  cursor: AuxilioMaternidadeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AuxilioMaternidadeCountAggregateInputObjectSchema])
    .optional(),
  _min: AuxilioMaternidadeMinAggregateInputObjectSchema.optional(),
  _max: AuxilioMaternidadeMaxAggregateInputObjectSchema.optional(),
  _avg: AuxilioMaternidadeAvgAggregateInputObjectSchema.optional(),
  _sum: AuxilioMaternidadeSumAggregateInputObjectSchema.optional(),
});
