import { z } from 'zod';
import { DocumentosUpdateManyMutationInputObjectSchema } from './objects/DocumentosUpdateManyMutationInput.schema';
import { DocumentosWhereInputObjectSchema } from './objects/DocumentosWhereInput.schema';

export const DocumentosUpdateManySchema = z.object({
  data: DocumentosUpdateManyMutationInputObjectSchema,
  where: DocumentosWhereInputObjectSchema.optional(),
});
