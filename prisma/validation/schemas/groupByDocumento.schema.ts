import { z } from 'zod';
import { DocumentoWhereInputObjectSchema } from './objects/DocumentoWhereInput.schema';
import { DocumentoOrderByWithAggregationInputObjectSchema } from './objects/DocumentoOrderByWithAggregationInput.schema';
import { DocumentoScalarWhereWithAggregatesInputObjectSchema } from './objects/DocumentoScalarWhereWithAggregatesInput.schema';
import { DocumentoScalarFieldEnumSchema } from './enums/DocumentoScalarFieldEnum.schema';

export const DocumentoGroupBySchema = z.object({
  where: DocumentoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DocumentoOrderByWithAggregationInputObjectSchema,
      DocumentoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DocumentoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DocumentoScalarFieldEnumSchema),
});
