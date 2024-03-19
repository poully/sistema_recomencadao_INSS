import { z } from 'zod';
import { MovimentacaoWhereUniqueInputObjectSchema } from './objects/MovimentacaoWhereUniqueInput.schema';
import { MovimentacaoCreateInputObjectSchema } from './objects/MovimentacaoCreateInput.schema';
import { MovimentacaoUncheckedCreateInputObjectSchema } from './objects/MovimentacaoUncheckedCreateInput.schema';
import { MovimentacaoUpdateInputObjectSchema } from './objects/MovimentacaoUpdateInput.schema';
import { MovimentacaoUncheckedUpdateInputObjectSchema } from './objects/MovimentacaoUncheckedUpdateInput.schema';

export const MovimentacaoUpsertSchema = z.object({
  where: MovimentacaoWhereUniqueInputObjectSchema,
  create: z.union([
    MovimentacaoCreateInputObjectSchema,
    MovimentacaoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MovimentacaoUpdateInputObjectSchema,
    MovimentacaoUncheckedUpdateInputObjectSchema,
  ]),
});
