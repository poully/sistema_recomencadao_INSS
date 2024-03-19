import { z } from 'zod';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './objects/TipoMovimentacaoWhereUniqueInput.schema';

export const TipoMovimentacaoFindUniqueSchema = z.object({
  where: TipoMovimentacaoWhereUniqueInputObjectSchema,
});
