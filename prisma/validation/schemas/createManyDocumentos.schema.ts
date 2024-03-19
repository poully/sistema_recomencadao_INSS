import { z } from 'zod';
import { DocumentosCreateManyInputObjectSchema } from './objects/DocumentosCreateManyInput.schema';

export const DocumentosCreateManySchema = z.object({
  data: z.union([
    DocumentosCreateManyInputObjectSchema,
    z.array(DocumentosCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
