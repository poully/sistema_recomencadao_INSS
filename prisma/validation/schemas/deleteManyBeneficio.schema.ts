import { z } from 'zod';
import { BeneficioWhereInputObjectSchema } from './objects/BeneficioWhereInput.schema';

export const BeneficioDeleteManySchema = z.object({
  where: BeneficioWhereInputObjectSchema.optional(),
});
