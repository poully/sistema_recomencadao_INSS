import { z } from 'zod';
import { PessoaUpdateInputObjectSchema } from './objects/PessoaUpdateInput.schema';
import { PessoaUncheckedUpdateInputObjectSchema } from './objects/PessoaUncheckedUpdateInput.schema';
import { PessoaWhereUniqueInputObjectSchema } from './objects/PessoaWhereUniqueInput.schema';

export const PessoaUpdateOneSchema = z.object({
  data: z.union([
    PessoaUpdateInputObjectSchema,
    PessoaUncheckedUpdateInputObjectSchema,
  ]),
  where: PessoaWhereUniqueInputObjectSchema,
});
