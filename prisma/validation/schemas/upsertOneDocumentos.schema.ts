import { z } from 'zod';
import { DocumentosWhereUniqueInputObjectSchema } from './objects/DocumentosWhereUniqueInput.schema';
import { DocumentosCreateInputObjectSchema } from './objects/DocumentosCreateInput.schema';
import { DocumentosUncheckedCreateInputObjectSchema } from './objects/DocumentosUncheckedCreateInput.schema';
import { DocumentosUpdateInputObjectSchema } from './objects/DocumentosUpdateInput.schema';
import { DocumentosUncheckedUpdateInputObjectSchema } from './objects/DocumentosUncheckedUpdateInput.schema';

export const DocumentosUpsertSchema = z.object({
  where: DocumentosWhereUniqueInputObjectSchema,
  create: z.union([
    DocumentosCreateInputObjectSchema,
    DocumentosUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DocumentosUpdateInputObjectSchema,
    DocumentosUncheckedUpdateInputObjectSchema,
  ]),
});
