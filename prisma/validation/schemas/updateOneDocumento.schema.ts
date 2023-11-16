import { z } from 'zod';
import { DocumentoUpdateInputObjectSchema } from './objects/DocumentoUpdateInput.schema';
import { DocumentoUncheckedUpdateInputObjectSchema } from './objects/DocumentoUncheckedUpdateInput.schema';
import { DocumentoWhereUniqueInputObjectSchema } from './objects/DocumentoWhereUniqueInput.schema';

export const DocumentoUpdateOneSchema = z.object({
  data: z.union([
    DocumentoUpdateInputObjectSchema,
    DocumentoUncheckedUpdateInputObjectSchema,
  ]),
  where: DocumentoWhereUniqueInputObjectSchema,
});
