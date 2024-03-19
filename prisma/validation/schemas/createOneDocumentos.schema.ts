import { z } from 'zod';
import { DocumentosCreateInputObjectSchema } from './objects/DocumentosCreateInput.schema';
import { DocumentosUncheckedCreateInputObjectSchema } from './objects/DocumentosUncheckedCreateInput.schema';

export const DocumentosCreateOneSchema = z.object({
  data: z.union([
    DocumentosCreateInputObjectSchema,
    DocumentosUncheckedCreateInputObjectSchema,
  ]),
});
