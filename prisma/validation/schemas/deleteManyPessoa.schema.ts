import { z } from 'zod';
import { PessoaWhereInputObjectSchema } from './objects/PessoaWhereInput.schema';

export const PessoaDeleteManySchema = z.object({
  where: PessoaWhereInputObjectSchema.optional(),
});
