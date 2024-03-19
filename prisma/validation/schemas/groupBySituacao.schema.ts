import { z } from 'zod';
import { SituacaoWhereInputObjectSchema } from './objects/SituacaoWhereInput.schema';
import { SituacaoOrderByWithAggregationInputObjectSchema } from './objects/SituacaoOrderByWithAggregationInput.schema';
import { SituacaoScalarWhereWithAggregatesInputObjectSchema } from './objects/SituacaoScalarWhereWithAggregatesInput.schema';
import { SituacaoScalarFieldEnumSchema } from './enums/SituacaoScalarFieldEnum.schema';

export const SituacaoGroupBySchema = z.object({
  where: SituacaoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SituacaoOrderByWithAggregationInputObjectSchema,
      SituacaoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SituacaoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SituacaoScalarFieldEnumSchema),
});
