import { z } from 'zod';
import { TipoMovimentacaoUpdateInputObjectSchema } from './objects/TipoMovimentacaoUpdateInput.schema';
import { TipoMovimentacaoUncheckedUpdateInputObjectSchema } from './objects/TipoMovimentacaoUncheckedUpdateInput.schema';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './objects/TipoMovimentacaoWhereUniqueInput.schema';

export const TipoMovimentacaoUpdateOneSchema = z.object({
  data: z.union([
    TipoMovimentacaoUpdateInputObjectSchema,
    TipoMovimentacaoUncheckedUpdateInputObjectSchema,
  ]),
  where: TipoMovimentacaoWhereUniqueInputObjectSchema,
});
