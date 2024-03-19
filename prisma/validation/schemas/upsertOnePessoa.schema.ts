import { z } from 'zod';
import { PessoaWhereUniqueInputObjectSchema } from './objects/PessoaWhereUniqueInput.schema';
import { PessoaCreateInputObjectSchema } from './objects/PessoaCreateInput.schema';
import { PessoaUncheckedCreateInputObjectSchema } from './objects/PessoaUncheckedCreateInput.schema';
import { PessoaUpdateInputObjectSchema } from './objects/PessoaUpdateInput.schema';
import { PessoaUncheckedUpdateInputObjectSchema } from './objects/PessoaUncheckedUpdateInput.schema';

export const PessoaUpsertSchema = z.object({
  where: PessoaWhereUniqueInputObjectSchema,
  create: z.union([
    PessoaCreateInputObjectSchema,
    PessoaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PessoaUpdateInputObjectSchema,
    PessoaUncheckedUpdateInputObjectSchema,
  ]),
});
