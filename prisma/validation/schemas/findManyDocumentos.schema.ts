import { z } from 'zod';
import { DocumentosOrderByWithRelationInputObjectSchema } from './objects/DocumentosOrderByWithRelationInput.schema';
import { DocumentosWhereInputObjectSchema } from './objects/DocumentosWhereInput.schema';
import { DocumentosWhereUniqueInputObjectSchema } from './objects/DocumentosWhereUniqueInput.schema';
import { DocumentosScalarFieldEnumSchema } from './enums/DocumentosScalarFieldEnum.schema';

export const DocumentosFindManySchema = z.object({
  orderBy: z
    .union([
      DocumentosOrderByWithRelationInputObjectSchema,
      DocumentosOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DocumentosWhereInputObjectSchema.optional(),
  cursor: DocumentosWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DocumentosScalarFieldEnumSchema).optional(),
});
