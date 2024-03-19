import { z } from 'zod';
import { DocumentosWhereUniqueInputObjectSchema } from './objects/DocumentosWhereUniqueInput.schema';

export const DocumentosDeleteOneSchema = z.object({
  where: DocumentosWhereUniqueInputObjectSchema,
});
