import { z } from 'zod';
import { DocumentosOrderByWithRelationInputObjectSchema } from './objects/DocumentosOrderByWithRelationInput.schema';
import { DocumentosWhereInputObjectSchema } from './objects/DocumentosWhereInput.schema';
import { DocumentosWhereUniqueInputObjectSchema } from './objects/DocumentosWhereUniqueInput.schema';
import { DocumentosCountAggregateInputObjectSchema } from './objects/DocumentosCountAggregateInput.schema';
import { DocumentosMinAggregateInputObjectSchema } from './objects/DocumentosMinAggregateInput.schema';
import { DocumentosMaxAggregateInputObjectSchema } from './objects/DocumentosMaxAggregateInput.schema';

export const DocumentosAggregateSchema = z.object({
  orderBy: z
    .union([
      DocumentosOrderByWithRelationInputObjectSchema,
      DocumentosOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DocumentosWhereInputObjectSchema.optional(),
  cursor: DocumentosWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DocumentosCountAggregateInputObjectSchema])
    .optional(),
  _min: DocumentosMinAggregateInputObjectSchema.optional(),
  _max: DocumentosMaxAggregateInputObjectSchema.optional(),
});
