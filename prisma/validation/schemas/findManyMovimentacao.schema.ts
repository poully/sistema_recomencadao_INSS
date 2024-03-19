import { z } from 'zod';
import { MovimentacaoOrderByWithRelationInputObjectSchema } from './objects/MovimentacaoOrderByWithRelationInput.schema';
import { MovimentacaoWhereInputObjectSchema } from './objects/MovimentacaoWhereInput.schema';
import { MovimentacaoWhereUniqueInputObjectSchema } from './objects/MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoScalarFieldEnumSchema } from './enums/MovimentacaoScalarFieldEnum.schema';

export const MovimentacaoFindManySchema = z.object({
  orderBy: z
    .union([
      MovimentacaoOrderByWithRelationInputObjectSchema,
      MovimentacaoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MovimentacaoWhereInputObjectSchema.optional(),
  cursor: MovimentacaoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MovimentacaoScalarFieldEnumSchema).optional(),
});
