import { z } from 'zod';
import { PessoaWhereUniqueInputObjectSchema } from './objects/PessoaWhereUniqueInput.schema';

export const PessoaDeleteOneSchema = z.object({
  where: PessoaWhereUniqueInputObjectSchema,
});
