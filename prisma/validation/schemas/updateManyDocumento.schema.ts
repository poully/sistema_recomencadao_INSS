import { z } from 'zod';
import { DocumentoUpdateManyMutationInputObjectSchema } from './objects/DocumentoUpdateManyMutationInput.schema';
import { DocumentoWhereInputObjectSchema } from './objects/DocumentoWhereInput.schema';

export const DocumentoUpdateManySchema = z.object({
  data: DocumentoUpdateManyMutationInputObjectSchema,
  where: DocumentoWhereInputObjectSchema.optional(),
});
