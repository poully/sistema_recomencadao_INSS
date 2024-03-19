import { z } from 'zod';
import { MovimentacaoCreateManyInputObjectSchema } from './objects/MovimentacaoCreateManyInput.schema';

export const MovimentacaoCreateManySchema = z.object({
  data: z.union([
    MovimentacaoCreateManyInputObjectSchema,
    z.array(MovimentacaoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
