import { z } from 'zod';
import { BeneficioWhereInputObjectSchema } from './objects/BeneficioWhereInput.schema';
import { BeneficioOrderByWithAggregationInputObjectSchema } from './objects/BeneficioOrderByWithAggregationInput.schema';
import { BeneficioScalarWhereWithAggregatesInputObjectSchema } from './objects/BeneficioScalarWhereWithAggregatesInput.schema';
import { BeneficioScalarFieldEnumSchema } from './enums/BeneficioScalarFieldEnum.schema';

export const BeneficioGroupBySchema = z.object({
  where: BeneficioWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BeneficioOrderByWithAggregationInputObjectSchema,
      BeneficioOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BeneficioScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BeneficioScalarFieldEnumSchema),
});
