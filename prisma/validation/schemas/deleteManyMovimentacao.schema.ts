import { z } from 'zod';
import { MovimentacaoWhereInputObjectSchema } from './objects/MovimentacaoWhereInput.schema';

export const MovimentacaoDeleteManySchema = z.object({
  where: MovimentacaoWhereInputObjectSchema.optional(),
});
