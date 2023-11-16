import { z } from 'zod';
import { DocumentoHasBeneficioCreateManyInputObjectSchema } from './objects/DocumentoHasBeneficioCreateManyInput.schema';

export const DocumentoHasBeneficioCreateManySchema = z.object({
  data: z.union([
    DocumentoHasBeneficioCreateManyInputObjectSchema,
    z.array(DocumentoHasBeneficioCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
