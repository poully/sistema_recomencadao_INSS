import { z } from 'zod';
import { TipoMovimentacaoWhereInputObjectSchema } from './objects/TipoMovimentacaoWhereInput.schema';
import { TipoMovimentacaoOrderByWithAggregationInputObjectSchema } from './objects/TipoMovimentacaoOrderByWithAggregationInput.schema';
import { TipoMovimentacaoScalarWhereWithAggregatesInputObjectSchema } from './objects/TipoMovimentacaoScalarWhereWithAggregatesInput.schema';
import { TipoMovimentacaoScalarFieldEnumSchema } from './enums/TipoMovimentacaoScalarFieldEnum.schema';

export const TipoMovimentacaoGroupBySchema = z.object({
  where: TipoMovimentacaoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TipoMovimentacaoOrderByWithAggregationInputObjectSchema,
      TipoMovimentacaoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TipoMovimentacaoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TipoMovimentacaoScalarFieldEnumSchema),
});
