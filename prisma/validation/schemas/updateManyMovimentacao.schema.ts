import { z } from 'zod';
import { MovimentacaoUpdateManyMutationInputObjectSchema } from './objects/MovimentacaoUpdateManyMutationInput.schema';
import { MovimentacaoWhereInputObjectSchema } from './objects/MovimentacaoWhereInput.schema';

export const MovimentacaoUpdateManySchema = z.object({
  data: MovimentacaoUpdateManyMutationInputObjectSchema,
  where: MovimentacaoWhereInputObjectSchema.optional(),
});
