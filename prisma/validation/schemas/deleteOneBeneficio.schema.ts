import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './objects/BeneficioWhereUniqueInput.schema';

export const BeneficioDeleteOneSchema = z.object({
  where: BeneficioWhereUniqueInputObjectSchema,
});
