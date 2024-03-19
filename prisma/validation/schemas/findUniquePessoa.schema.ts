import { z } from 'zod';
import { PessoaWhereUniqueInputObjectSchema } from './objects/PessoaWhereUniqueInput.schema';

export const PessoaFindUniqueSchema = z.object({
  where: PessoaWhereUniqueInputObjectSchema,
});
