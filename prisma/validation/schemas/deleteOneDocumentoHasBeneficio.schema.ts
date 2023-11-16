import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './objects/DocumentoHasBeneficioWhereUniqueInput.schema';

export const DocumentoHasBeneficioDeleteOneSchema = z.object({
  where: DocumentoHasBeneficioWhereUniqueInputObjectSchema,
});
