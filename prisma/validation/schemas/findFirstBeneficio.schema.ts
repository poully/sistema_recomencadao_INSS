import { z } from 'zod';
import { BeneficioOrderByWithRelationInputObjectSchema } from './objects/BeneficioOrderByWithRelationInput.schema';
import { BeneficioWhereInputObjectSchema } from './objects/BeneficioWhereInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './objects/BeneficioWhereUniqueInput.schema';
import { BeneficioScalarFieldEnumSchema } from './enums/BeneficioScalarFieldEnum.schema';

export const BeneficioFindFirstSchema = z.object({
  orderBy: z
    .union([
      BeneficioOrderByWithRelationInputObjectSchema,
      BeneficioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficioWhereInputObjectSchema.optional(),
  cursor: BeneficioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BeneficioScalarFieldEnumSchema).optional(),
});
