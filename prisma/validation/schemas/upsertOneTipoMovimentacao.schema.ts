import { z } from 'zod';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './objects/TipoMovimentacaoWhereUniqueInput.schema';
import { TipoMovimentacaoCreateInputObjectSchema } from './objects/TipoMovimentacaoCreateInput.schema';
import { TipoMovimentacaoUncheckedCreateInputObjectSchema } from './objects/TipoMovimentacaoUncheckedCreateInput.schema';
import { TipoMovimentacaoUpdateInputObjectSchema } from './objects/TipoMovimentacaoUpdateInput.schema';
import { TipoMovimentacaoUncheckedUpdateInputObjectSchema } from './objects/TipoMovimentacaoUncheckedUpdateInput.schema';

export const TipoMovimentacaoUpsertSchema = z.object({
  where: TipoMovimentacaoWhereUniqueInputObjectSchema,
  create: z.union([
    TipoMovimentacaoCreateInputObjectSchema,
    TipoMovimentacaoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TipoMovimentacaoUpdateInputObjectSchema,
    TipoMovimentacaoUncheckedUpdateInputObjectSchema,
  ]),
});
