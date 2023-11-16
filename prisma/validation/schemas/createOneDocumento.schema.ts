import { z } from 'zod';
import { DocumentoCreateInputObjectSchema } from './objects/DocumentoCreateInput.schema';
import { DocumentoUncheckedCreateInputObjectSchema } from './objects/DocumentoUncheckedCreateInput.schema';

export const DocumentoCreateOneSchema = z.object({
  data: z.union([
    DocumentoCreateInputObjectSchema,
    DocumentoUncheckedCreateInputObjectSchema,
  ]),
});
