import { z } from 'zod';
import { TipoMovimentacaoCreateInputObjectSchema } from './objects/TipoMovimentacaoCreateInput.schema';
import { TipoMovimentacaoUncheckedCreateInputObjectSchema } from './objects/TipoMovimentacaoUncheckedCreateInput.schema';

export const TipoMovimentacaoCreateOneSchema = z.object({
  data: z.union([
    TipoMovimentacaoCreateInputObjectSchema,
    TipoMovimentacaoUncheckedCreateInputObjectSchema,
  ]),
});
