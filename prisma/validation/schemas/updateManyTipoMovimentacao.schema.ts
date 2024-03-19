import { z } from 'zod';
import { TipoMovimentacaoUpdateManyMutationInputObjectSchema } from './objects/TipoMovimentacaoUpdateManyMutationInput.schema';
import { TipoMovimentacaoWhereInputObjectSchema } from './objects/TipoMovimentacaoWhereInput.schema';

export const TipoMovimentacaoUpdateManySchema = z.object({
  data: TipoMovimentacaoUpdateManyMutationInputObjectSchema,
  where: TipoMovimentacaoWhereInputObjectSchema.optional(),
});
