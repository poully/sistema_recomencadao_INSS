import { z } from 'zod';
import { DocumentosUpdateInputObjectSchema } from './objects/DocumentosUpdateInput.schema';
import { DocumentosUncheckedUpdateInputObjectSchema } from './objects/DocumentosUncheckedUpdateInput.schema';
import { DocumentosWhereUniqueInputObjectSchema } from './objects/DocumentosWhereUniqueInput.schema';

export const DocumentosUpdateOneSchema = z.object({
  data: z.union([
    DocumentosUpdateInputObjectSchema,
    DocumentosUncheckedUpdateInputObjectSchema,
  ]),
  where: DocumentosWhereUniqueInputObjectSchema,
});
