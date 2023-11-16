import { z } from 'zod';
import { DocumentoWhereInputObjectSchema } from './objects/DocumentoWhereInput.schema';

export const DocumentoDeleteManySchema = z.object({
  where: DocumentoWhereInputObjectSchema.optional(),
});
