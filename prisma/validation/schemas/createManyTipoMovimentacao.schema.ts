import { z } from 'zod';
import { TipoMovimentacaoCreateManyInputObjectSchema } from './objects/TipoMovimentacaoCreateManyInput.schema';

export const TipoMovimentacaoCreateManySchema = z.object({
  data: z.union([
    TipoMovimentacaoCreateManyInputObjectSchema,
    z.array(TipoMovimentacaoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
