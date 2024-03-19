import { z } from 'zod';
import { SituacaoUpdateManyMutationInputObjectSchema } from './objects/SituacaoUpdateManyMutationInput.schema';
import { SituacaoWhereInputObjectSchema } from './objects/SituacaoWhereInput.schema';

export const SituacaoUpdateManySchema = z.object({
  data: SituacaoUpdateManyMutationInputObjectSchema,
  where: SituacaoWhereInputObjectSchema.optional(),
});
