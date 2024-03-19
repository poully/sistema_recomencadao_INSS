import { z } from 'zod';
import { MovimentacaoUpdateInputObjectSchema } from './objects/MovimentacaoUpdateInput.schema';
import { MovimentacaoUncheckedUpdateInputObjectSchema } from './objects/MovimentacaoUncheckedUpdateInput.schema';
import { MovimentacaoWhereUniqueInputObjectSchema } from './objects/MovimentacaoWhereUniqueInput.schema';

export const MovimentacaoUpdateOneSchema = z.object({
  data: z.union([
    MovimentacaoUpdateInputObjectSchema,
    MovimentacaoUncheckedUpdateInputObjectSchema,
  ]),
  where: MovimentacaoWhereUniqueInputObjectSchema,
});
