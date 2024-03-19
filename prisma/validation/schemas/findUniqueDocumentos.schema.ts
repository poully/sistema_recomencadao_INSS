import { z } from 'zod';
import { DocumentosWhereUniqueInputObjectSchema } from './objects/DocumentosWhereUniqueInput.schema';

export const DocumentosFindUniqueSchema = z.object({
  where: DocumentosWhereUniqueInputObjectSchema,
});
