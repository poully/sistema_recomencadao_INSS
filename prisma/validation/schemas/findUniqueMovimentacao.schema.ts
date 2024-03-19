import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './objects/MovimentacaoWhereUniqueInput.schema';

export const MovimentacaoFindUniqueSchema = z.object({
  where: MovimentacaoWhereUniqueInputObjectSchema,
});
