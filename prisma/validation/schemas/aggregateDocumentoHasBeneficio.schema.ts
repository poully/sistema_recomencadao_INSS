import { z } from 'zod';
import { DocumentoHasBeneficioOrderByWithRelationInputObjectSchema } from './objects/DocumentoHasBeneficioOrderByWithRelationInput.schema';
import { DocumentoHasBeneficioWhereInputObjectSchema } from './objects/DocumentoHasBeneficioWhereInput.schema';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './objects/DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioCountAggregateInputObjectSchema } from './objects/DocumentoHasBeneficioCountAggregateInput.schema';
import { DocumentoHasBeneficioMinAggregateInputObjectSchema } from './objects/DocumentoHasBeneficioMinAggregateInput.schema';
import { DocumentoHasBeneficioMaxAggregateInputObjectSchema } from './objects/DocumentoHasBeneficioMaxAggregateInput.schema';
import { DocumentoHasBeneficioAvgAggregateInputObjectSchema } from './objects/DocumentoHasBeneficioAvgAggregateInput.schema';
import { DocumentoHasBeneficioSumAggregateInputObjectSchema } from './objects/DocumentoHasBeneficioSumAggregateInput.schema';

export const DocumentoHasBeneficioAggregateSchema = z.object({
  orderBy: z
    .union([
      DocumentoHasBeneficioOrderByWithRelationInputObjectSchema,
      DocumentoHasBeneficioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DocumentoHasBeneficioWhereInputObjectSchema.optional(),
  cursor: DocumentoHasBeneficioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      DocumentoHasBeneficioCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: DocumentoHasBeneficioMinAggregateInputObjectSchema.optional(),
  _max: DocumentoHasBeneficioMaxAggregateInputObjectSchema.optional(),
  _avg: DocumentoHasBeneficioAvgAggregateInputObjectSchema.optional(),
  _sum: DocumentoHasBeneficioSumAggregateInputObjectSchema.optional(),
});
