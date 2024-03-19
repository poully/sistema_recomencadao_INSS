import { z } from 'zod';
import { SituacaoCreateInputObjectSchema } from './objects/SituacaoCreateInput.schema';
import { SituacaoUncheckedCreateInputObjectSchema } from './objects/SituacaoUncheckedCreateInput.schema';

export const SituacaoCreateOneSchema = z.object({
  data: z.union([
    SituacaoCreateInputObjectSchema,
    SituacaoUncheckedCreateInputObjectSchema,
  ]),
});
