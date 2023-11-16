import { z } from 'zod';
import { DocumentoOrderByWithRelationInputObjectSchema } from './objects/DocumentoOrderByWithRelationInput.schema';
import { DocumentoWhereInputObjectSchema } from './objects/DocumentoWhereInput.schema';
import { DocumentoWhereUniqueInputObjectSchema } from './objects/DocumentoWhereUniqueInput.schema';
import { DocumentoCountAggregateInputObjectSchema } from './objects/DocumentoCountAggregateInput.schema';
import { DocumentoMinAggregateInputObjectSchema } from './objects/DocumentoMinAggregateInput.schema';
import { DocumentoMaxAggregateInputObjectSchema } from './objects/DocumentoMaxAggregateInput.schema';
import { DocumentoAvgAggregateInputObjectSchema } from './objects/DocumentoAvgAggregateInput.schema';
import { DocumentoSumAggregateInputObjectSchema } from './objects/DocumentoSumAggregateInput.schema';

export const DocumentoAggregateSchema = z.object({
  orderBy: z
    .union([
      DocumentoOrderByWithRelationInputObjectSchema,
      DocumentoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DocumentoWhereInputObjectSchema.optional(),
  cursor: DocumentoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DocumentoCountAggregateInputObjectSchema])
    .optional(),
  _min: DocumentoMinAggregateInputObjectSchema.optional(),
  _max: DocumentoMaxAggregateInputObjectSchema.optional(),
  _avg: DocumentoAvgAggregateInputObjectSchema.optional(),
  _sum: DocumentoSumAggregateInputObjectSchema.optional(),
});
