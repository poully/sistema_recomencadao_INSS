import { z } from 'zod';
import { DocumentoHasBeneficioUpdateManyMutationInputObjectSchema } from './objects/DocumentoHasBeneficioUpdateManyMutationInput.schema';
import { DocumentoHasBeneficioWhereInputObjectSchema } from './objects/DocumentoHasBeneficioWhereInput.schema';

export const DocumentoHasBeneficioUpdateManySchema = z.object({
  data: DocumentoHasBeneficioUpdateManyMutationInputObjectSchema,
  where: DocumentoHasBeneficioWhereInputObjectSchema.optional(),
});
