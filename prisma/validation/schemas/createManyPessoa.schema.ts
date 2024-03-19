import { z } from 'zod';
import { PessoaCreateManyInputObjectSchema } from './objects/PessoaCreateManyInput.schema';

export const PessoaCreateManySchema = z.object({
  data: z.union([
    PessoaCreateManyInputObjectSchema,
    z.array(PessoaCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
