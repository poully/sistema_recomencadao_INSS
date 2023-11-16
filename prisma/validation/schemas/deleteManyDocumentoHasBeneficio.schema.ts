import { z } from 'zod';
import { DocumentoHasBeneficioWhereInputObjectSchema } from './objects/DocumentoHasBeneficioWhereInput.schema';

export const DocumentoHasBeneficioDeleteManySchema = z.object({
  where: DocumentoHasBeneficioWhereInputObjectSchema.optional(),
});
