import { z } from 'zod';
import { DocumentoHasBeneficioUpdateInputObjectSchema } from './objects/DocumentoHasBeneficioUpdateInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateInputObjectSchema } from './objects/DocumentoHasBeneficioUncheckedUpdateInput.schema';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './objects/DocumentoHasBeneficioWhereUniqueInput.schema';

export const DocumentoHasBeneficioUpdateOneSchema = z.object({
  data: z.union([
    DocumentoHasBeneficioUpdateInputObjectSchema,
    DocumentoHasBeneficioUncheckedUpdateInputObjectSchema,
  ]),
  where: DocumentoHasBeneficioWhereUniqueInputObjectSchema,
});
