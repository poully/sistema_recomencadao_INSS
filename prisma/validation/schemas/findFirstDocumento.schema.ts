import { z } from 'zod';
import { DocumentoOrderByWithRelationInputObjectSchema } from './objects/DocumentoOrderByWithRelationInput.schema';
import { DocumentoWhereInputObjectSchema } from './objects/DocumentoWhereInput.schema';
import { DocumentoWhereUniqueInputObjectSchema } from './objects/DocumentoWhereUniqueInput.schema';
import { DocumentoScalarFieldEnumSchema } from './enums/DocumentoScalarFieldEnum.schema';

export const DocumentoFindFirstSchema = z.object({
  orderBy: z
    .union([
      DocumentoOrderByWithRelationInputObjectSchema,
      DocumentoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DocumentoWhereInputObjectSchema.optional(),
  cursor: DocumentoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DocumentoScalarFieldEnumSchema).optional(),
});
