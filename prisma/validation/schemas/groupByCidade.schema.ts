import { z } from 'zod';
import { CidadeWhereInputObjectSchema } from './objects/CidadeWhereInput.schema';
import { CidadeOrderByWithAggregationInputObjectSchema } from './objects/CidadeOrderByWithAggregationInput.schema';
import { CidadeScalarWhereWithAggregatesInputObjectSchema } from './objects/CidadeScalarWhereWithAggregatesInput.schema';
import { CidadeScalarFieldEnumSchema } from './enums/CidadeScalarFieldEnum.schema';

export const CidadeGroupBySchema = z.object({
  where: CidadeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CidadeOrderByWithAggregationInputObjectSchema,
      CidadeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CidadeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CidadeScalarFieldEnumSchema),
});
