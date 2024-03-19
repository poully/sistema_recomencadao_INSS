import { z } from 'zod';
import { TipoMovimentacaoWhereUniqueInputObjectSchema } from './objects/TipoMovimentacaoWhereUniqueInput.schema';

export const TipoMovimentacaoDeleteOneSchema = z.object({
  where: TipoMovimentacaoWhereUniqueInputObjectSchema,
});
