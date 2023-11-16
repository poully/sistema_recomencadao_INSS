import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './objects/DocumentoHasBeneficioWhereUniqueInput.schema';

export const DocumentoHasBeneficioFindUniqueSchema = z.object({
  where: DocumentoHasBeneficioWhereUniqueInputObjectSchema,
});
