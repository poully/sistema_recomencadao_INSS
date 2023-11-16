import { z } from 'zod';
import { DocumentoHasBeneficioOrderByWithRelationInputObjectSchema } from './objects/DocumentoHasBeneficioOrderByWithRelationInput.schema';
import { DocumentoHasBeneficioWhereInputObjectSchema } from './objects/DocumentoHasBeneficioWhereInput.schema';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './objects/DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioScalarFieldEnumSchema } from './enums/DocumentoHasBeneficioScalarFieldEnum.schema';

export const DocumentoHasBeneficioFindFirstSchema = z.object({
  orderBy: z
    .union([
      DocumentoHasBeneficioOrderByWithRelationInputObjectSchema,
      DocumentoHasBeneficioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DocumentoHasBeneficioWhereInputObjectSchema.optional(),
  cursor: DocumentoHasBeneficioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DocumentoHasBeneficioScalarFieldEnumSchema).optional(),
});
