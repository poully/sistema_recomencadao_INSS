import { z } from 'zod';
import { BeneficioUpdateInputObjectSchema } from './objects/BeneficioUpdateInput.schema';
import { BeneficioUncheckedUpdateInputObjectSchema } from './objects/BeneficioUncheckedUpdateInput.schema';
import { BeneficioWhereUniqueInputObjectSchema } from './objects/BeneficioWhereUniqueInput.schema';

export const BeneficioUpdateOneSchema = z.object({
  data: z.union([
    BeneficioUpdateInputObjectSchema,
    BeneficioUncheckedUpdateInputObjectSchema,
  ]),
  where: BeneficioWhereUniqueInputObjectSchema,
});
