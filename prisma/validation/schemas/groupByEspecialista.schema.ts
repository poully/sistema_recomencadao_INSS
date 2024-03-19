import { z } from 'zod';
import { EspecialistaWhereInputObjectSchema } from './objects/EspecialistaWhereInput.schema';
import { EspecialistaOrderByWithAggregationInputObjectSchema } from './objects/EspecialistaOrderByWithAggregationInput.schema';
import { EspecialistaScalarWhereWithAggregatesInputObjectSchema } from './objects/EspecialistaScalarWhereWithAggregatesInput.schema';
import { EspecialistaScalarFieldEnumSchema } from './enums/EspecialistaScalarFieldEnum.schema';

export const EspecialistaGroupBySchema = z.object({
  where: EspecialistaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EspecialistaOrderByWithAggregationInputObjectSchema,
      EspecialistaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: EspecialistaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EspecialistaScalarFieldEnumSchema),
});
