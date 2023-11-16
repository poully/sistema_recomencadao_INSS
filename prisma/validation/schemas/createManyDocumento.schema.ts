import { z } from 'zod';
import { DocumentoCreateManyInputObjectSchema } from './objects/DocumentoCreateManyInput.schema';

export const DocumentoCreateManySchema = z.object({
  data: z.union([
    DocumentoCreateManyInputObjectSchema,
    z.array(DocumentoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
