import { z } from 'zod';
import { PessoaUpdateManyMutationInputObjectSchema } from './objects/PessoaUpdateManyMutationInput.schema';
import { PessoaWhereInputObjectSchema } from './objects/PessoaWhereInput.schema';

export const PessoaUpdateManySchema = z.object({
  data: PessoaUpdateManyMutationInputObjectSchema,
  where: PessoaWhereInputObjectSchema.optional(),
});
