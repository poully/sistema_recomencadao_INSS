import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './objects/MovimentacaoWhereUniqueInput.schema';

export const MovimentacaoDeleteOneSchema = z.object({
  where: MovimentacaoWhereUniqueInputObjectSchema,
});
