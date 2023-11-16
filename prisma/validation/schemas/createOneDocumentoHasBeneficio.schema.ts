import { z } from 'zod';
import { DocumentoHasBeneficioCreateInputObjectSchema } from './objects/DocumentoHasBeneficioCreateInput.schema';
import { DocumentoHasBeneficioUncheckedCreateInputObjectSchema } from './objects/DocumentoHasBeneficioUncheckedCreateInput.schema';

export const DocumentoHasBeneficioCreateOneSchema = z.object({
  data: z.union([
    DocumentoHasBeneficioCreateInputObjectSchema,
    DocumentoHasBeneficioUncheckedCreateInputObjectSchema,
  ]),
});
