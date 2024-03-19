import { z } from 'zod';
import { SituacaoCreateManyInputObjectSchema } from './objects/SituacaoCreateManyInput.schema';

export const SituacaoCreateManySchema = z.object({
  data: z.union([
    SituacaoCreateManyInputObjectSchema,
    z.array(SituacaoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
