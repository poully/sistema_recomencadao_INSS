import { z } from 'zod';
import { DocumentoWhereUniqueInputObjectSchema } from './objects/DocumentoWhereUniqueInput.schema';
import { DocumentoCreateInputObjectSchema } from './objects/DocumentoCreateInput.schema';
import { DocumentoUncheckedCreateInputObjectSchema } from './objects/DocumentoUncheckedCreateInput.schema';
import { DocumentoUpdateInputObjectSchema } from './objects/DocumentoUpdateInput.schema';
import { DocumentoUncheckedUpdateInputObjectSchema } from './objects/DocumentoUncheckedUpdateInput.schema';

export const DocumentoUpsertSchema = z.object({
  where: DocumentoWhereUniqueInputObjectSchema,
  create: z.union([
    DocumentoCreateInputObjectSchema,
    DocumentoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DocumentoUpdateInputObjectSchema,
    DocumentoUncheckedUpdateInputObjectSchema,
  ]),
});
