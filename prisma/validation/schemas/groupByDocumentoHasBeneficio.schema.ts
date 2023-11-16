import { z } from 'zod';
import { DocumentoHasBeneficioWhereInputObjectSchema } from './objects/DocumentoHasBeneficioWhereInput.schema';
import { DocumentoHasBeneficioOrderByWithAggregationInputObjectSchema } from './objects/DocumentoHasBeneficioOrderByWithAggregationInput.schema';
import { DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema } from './objects/DocumentoHasBeneficioScalarWhereWithAggregatesInput.schema';
import { DocumentoHasBeneficioScalarFieldEnumSchema } from './enums/DocumentoHasBeneficioScalarFieldEnum.schema';

export const DocumentoHasBeneficioGroupBySchema = z.object({
  where: DocumentoHasBeneficioWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DocumentoHasBeneficioOrderByWithAggregationInputObjectSchema,
      DocumentoHasBeneficioOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    DocumentoHasBeneficioScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DocumentoHasBeneficioScalarFieldEnumSchema),
});
