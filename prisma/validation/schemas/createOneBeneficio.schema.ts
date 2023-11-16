import { z } from 'zod';
import { BeneficioCreateInputObjectSchema } from './objects/BeneficioCreateInput.schema';
import { BeneficioUncheckedCreateInputObjectSchema } from './objects/BeneficioUncheckedCreateInput.schema';

export const BeneficioCreateOneSchema = z.object({
  data: z.union([
    BeneficioCreateInputObjectSchema,
    BeneficioUncheckedCreateInputObjectSchema,
  ]),
});
