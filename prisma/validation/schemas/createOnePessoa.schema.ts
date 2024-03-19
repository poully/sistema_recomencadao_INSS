import { z } from 'zod';
import { PessoaCreateInputObjectSchema } from './objects/PessoaCreateInput.schema';
import { PessoaUncheckedCreateInputObjectSchema } from './objects/PessoaUncheckedCreateInput.schema';

export const PessoaCreateOneSchema = z.object({
  data: z.union([
    PessoaCreateInputObjectSchema,
    PessoaUncheckedCreateInputObjectSchema,
  ]),
});
