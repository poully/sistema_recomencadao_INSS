import { z } from 'zod';
import { EstadoWhereInputObjectSchema } from './objects/EstadoWhereInput.schema';
import { EstadoOrderByWithAggregationInputObjectSchema } from './objects/EstadoOrderByWithAggregationInput.schema';
import { EstadoScalarWhereWithAggregatesInputObjectSchema } from './objects/EstadoScalarWhereWithAggregatesInput.schema';
import { EstadoScalarFieldEnumSchema } from './enums/EstadoScalarFieldEnum.schema';

export const EstadoGroupBySchema = z.object({
  where: EstadoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EstadoOrderByWithAggregationInputObjectSchema,
      EstadoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EstadoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EstadoScalarFieldEnumSchema),
});
