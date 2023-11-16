import { z } from 'zod';
import { BeneficioCreateManyInputObjectSchema } from './objects/BeneficioCreateManyInput.schema';

export const BeneficioCreateManySchema = z.object({
  data: z.union([
    BeneficioCreateManyInputObjectSchema,
    z.array(BeneficioCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
