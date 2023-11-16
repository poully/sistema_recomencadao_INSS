import { z } from 'zod';
import { DocumentoWhereUniqueInputObjectSchema } from './objects/DocumentoWhereUniqueInput.schema';

export const DocumentoDeleteOneSchema = z.object({
  where: DocumentoWhereUniqueInputObjectSchema,
});
