import { z } from 'zod';
import { MovimentacaoCreateInputObjectSchema } from './objects/MovimentacaoCreateInput.schema';
import { MovimentacaoUncheckedCreateInputObjectSchema } from './objects/MovimentacaoUncheckedCreateInput.schema';

export const MovimentacaoCreateOneSchema = z.object({
  data: z.union([
    MovimentacaoCreateInputObjectSchema,
    MovimentacaoUncheckedCreateInputObjectSchema,
  ]),
});
