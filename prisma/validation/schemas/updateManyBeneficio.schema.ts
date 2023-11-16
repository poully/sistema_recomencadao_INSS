import { z } from 'zod';
import { BeneficioUpdateManyMutationInputObjectSchema } from './objects/BeneficioUpdateManyMutationInput.schema';
import { BeneficioWhereInputObjectSchema } from './objects/BeneficioWhereInput.schema';

export const BeneficioUpdateManySchema = z.object({
  data: BeneficioUpdateManyMutationInputObjectSchema,
  where: BeneficioWhereInputObjectSchema.optional(),
});
