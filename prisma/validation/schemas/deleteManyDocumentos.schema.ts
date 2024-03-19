import { z } from 'zod';
import { DocumentosWhereInputObjectSchema } from './objects/DocumentosWhereInput.schema';

export const DocumentosDeleteManySchema = z.object({
  where: DocumentosWhereInputObjectSchema.optional(),
});
