import { z } from 'zod';
import { DocumentosWhereInputObjectSchema } from './objects/DocumentosWhereInput.schema';
import { DocumentosOrderByWithAggregationInputObjectSchema } from './objects/DocumentosOrderByWithAggregationInput.schema';
import { DocumentosScalarWhereWithAggregatesInputObjectSchema } from './objects/DocumentosScalarWhereWithAggregatesInput.schema';
import { DocumentosScalarFieldEnumSchema } from './enums/DocumentosScalarFieldEnum.schema';

export const DocumentosGroupBySchema = z.object({
  where: DocumentosWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DocumentosOrderByWithAggregationInputObjectSchema,
      DocumentosOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DocumentosScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DocumentosScalarFieldEnumSchema),
});
