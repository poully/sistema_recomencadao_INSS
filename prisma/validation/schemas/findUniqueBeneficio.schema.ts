import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './objects/BeneficioWhereUniqueInput.schema';

export const BeneficioFindUniqueSchema = z.object({
  where: BeneficioWhereUniqueInputObjectSchema,
});
