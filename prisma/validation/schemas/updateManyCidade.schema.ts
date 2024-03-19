import { z } from 'zod';
import { CidadeUpdateManyMutationInputObjectSchema } from './objects/CidadeUpdateManyMutationInput.schema';
import { CidadeWhereInputObjectSchema } from './objects/CidadeWhereInput.schema';

export const CidadeUpdateManySchema = z.object({
  data: CidadeUpdateManyMutationInputObjectSchema,
  where: CidadeWhereInputObjectSchema.optional(),
});
