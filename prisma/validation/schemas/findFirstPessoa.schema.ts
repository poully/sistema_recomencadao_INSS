import { z } from 'zod';
import { PessoaOrderByWithRelationInputObjectSchema } from './objects/PessoaOrderByWithRelationInput.schema';
import { PessoaWhereInputObjectSchema } from './objects/PessoaWhereInput.schema';
import { PessoaWhereUniqueInputObjectSchema } from './objects/PessoaWhereUniqueInput.schema';
import { PessoaScalarFieldEnumSchema } from './enums/PessoaScalarFieldEnum.schema';

export const PessoaFindFirstSchema = z.object({
  orderBy: z
    .union([
      PessoaOrderByWithRelationInputObjectSchema,
      PessoaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PessoaWhereInputObjectSchema.optional(),
  cursor: PessoaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PessoaScalarFieldEnumSchema).optional(),
});
