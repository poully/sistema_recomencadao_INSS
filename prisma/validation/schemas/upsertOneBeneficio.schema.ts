import { z } from 'zod';
import { BeneficioWhereUniqueInputObjectSchema } from './objects/BeneficioWhereUniqueInput.schema';
import { BeneficioCreateInputObjectSchema } from './objects/BeneficioCreateInput.schema';
import { BeneficioUncheckedCreateInputObjectSchema } from './objects/BeneficioUncheckedCreateInput.schema';
import { BeneficioUpdateInputObjectSchema } from './objects/BeneficioUpdateInput.schema';
import { BeneficioUncheckedUpdateInputObjectSchema } from './objects/BeneficioUncheckedUpdateInput.schema';

export const BeneficioUpsertSchema = z.object({
  where: BeneficioWhereUniqueInputObjectSchema,
  create: z.union([
    BeneficioCreateInputObjectSchema,
    BeneficioUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BeneficioUpdateInputObjectSchema,
    BeneficioUncheckedUpdateInputObjectSchema,
  ]),
});
