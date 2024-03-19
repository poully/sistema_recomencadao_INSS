import { z } from 'zod';
import { MovimentacaoWhereInputObjectSchema } from './objects/MovimentacaoWhereInput.schema';
import { MovimentacaoOrderByWithAggregationInputObjectSchema } from './objects/MovimentacaoOrderByWithAggregationInput.schema';
import { MovimentacaoScalarWhereWithAggregatesInputObjectSchema } from './objects/MovimentacaoScalarWhereWithAggregatesInput.schema';
import { MovimentacaoScalarFieldEnumSchema } from './enums/MovimentacaoScalarFieldEnum.schema';

export const MovimentacaoGroupBySchema = z.object({
  where: MovimentacaoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MovimentacaoOrderByWithAggregationInputObjectSchema,
      MovimentacaoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MovimentacaoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MovimentacaoScalarFieldEnumSchema),
});
