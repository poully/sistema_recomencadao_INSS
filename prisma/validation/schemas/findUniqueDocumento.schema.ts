import { z } from 'zod';
import { DocumentoWhereUniqueInputObjectSchema } from './objects/DocumentoWhereUniqueInput.schema';

export const DocumentoFindUniqueSchema = z.object({
  where: DocumentoWhereUniqueInputObjectSchema,
});
