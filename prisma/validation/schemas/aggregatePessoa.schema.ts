import { z } from 'zod';
import { PessoaOrderByWithRelationInputObjectSchema } from './objects/PessoaOrderByWithRelationInput.schema';
import { PessoaWhereInputObjectSchema } from './objects/PessoaWhereInput.schema';
import { PessoaWhereUniqueInputObjectSchema } from './objects/PessoaWhereUniqueInput.schema';
import { PessoaCountAggregateInputObjectSchema } from './objects/PessoaCountAggregateInput.schema';
import { PessoaMinAggregateInputObjectSchema } from './objects/PessoaMinAggregateInput.schema';
import { PessoaMaxAggregateInputObjectSchema } from './objects/PessoaMaxAggregateInput.schema';
import { PessoaAvgAggregateInputObjectSchema } from './objects/PessoaAvgAggregateInput.schema';
import { PessoaSumAggregateInputObjectSchema } from './objects/PessoaSumAggregateInput.schema';

export const PessoaAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), PessoaCountAggregateInputObjectSchema])
    .optional(),
  _min: PessoaMinAggregateInputObjectSchema.optional(),
  _max: PessoaMaxAggregateInputObjectSchema.optional(),
  _avg: PessoaAvgAggregateInputObjectSchema.optional(),
  _sum: PessoaSumAggregateInputObjectSchema.optional(),
});
