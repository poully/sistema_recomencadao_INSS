import { z } from 'zod';
import { TipoWhereInputObjectSchema } from './objects/TipoWhereInput.schema';
import { TipoOrderByWithAggregationInputObjectSchema } from './objects/TipoOrderByWithAggregationInput.schema';
import { TipoScalarWhereWithAggregatesInputObjectSchema } from './objects/TipoScalarWhereWithAggregatesInput.schema';
import { TipoScalarFieldEnumSchema } from './enums/TipoScalarFieldEnum.schema';

export const TipoGroupBySchema = z.object({
  where: TipoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TipoOrderByWithAggregationInputObjectSchema,
      TipoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TipoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TipoScalarFieldEnumSchema),
});
