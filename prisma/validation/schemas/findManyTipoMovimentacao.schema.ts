import { z } from 'zod';
import { TipoMovimentacaoOrderByWithRelationInputObjectSchema } from './objects/TipoMovimentacaoOrderByWithRelationInput.schema';
import { TipoMovimentacaoWhereInputObjectSchema } from './objects/TipoMovimentacaoWhereInput.schema';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './objects/TipoMovimentacaoWhereUniqueInput.schema';
import { TipoMovimentacaoScalarFieldEnumSchema } from './enums/TipoMovimentacaoScalarFieldEnum.schema';

export const TipoMovimentacaoFindManySchema = z.object({
  orderBy: z
    .union([
      TipoMovimentacaoOrderByWithRelationInputObjectSchema,
      TipoMovimentacaoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TipoMovimentacaoWhereInputObjectSchema.optional(),
  cursor: TipoMovimentacaoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TipoMovimentacaoScalarFieldEnumSchema).optional(),
});
