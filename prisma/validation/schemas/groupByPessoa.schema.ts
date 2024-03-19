import { z } from 'zod';
import { PessoaWhereInputObjectSchema } from './objects/PessoaWhereInput.schema';
import { PessoaOrderByWithAggregationInputObjectSchema } from './objects/PessoaOrderByWithAggregationInput.schema';
import { PessoaScalarWhereWithAggregatesInputObjectSchema } from './objects/PessoaScalarWhereWithAggregatesInput.schema';
import { PessoaScalarFieldEnumSchema } from './enums/PessoaScalarFieldEnum.schema';

export const PessoaGroupBySchema = z.object({
  where: PessoaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PessoaOrderByWithAggregationInputObjectSchema,
      PessoaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PessoaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PessoaScalarFieldEnumSchema),
});
