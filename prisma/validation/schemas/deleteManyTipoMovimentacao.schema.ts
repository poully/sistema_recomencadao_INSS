import { z } from 'zod';
import { TipoMovimentacaoWhereInputObjectSchema } from './objects/TipoMovimentacaoWhereInput.schema';

export const TipoMovimentacaoDeleteManySchema = z.object({
  where: TipoMovimentacaoWhereInputObjectSchema.optional(),
});
