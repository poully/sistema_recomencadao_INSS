import { z } from 'zod';
import { SituacaoWhereUniqueInputObjectSchema } from './objects/SituacaoWhereUniqueInput.schema';
import { SituacaoCreateInputObjectSchema } from './objects/SituacaoCreateInput.schema';
import { SituacaoUncheckedCreateInputObjectSchema } from './objects/SituacaoUncheckedCreateInput.schema';
import { SituacaoUpdateInputObjectSchema } from './objects/SituacaoUpdateInput.schema';
import { SituacaoUncheckedUpdateInputObjectSchema } from './objects/SituacaoUncheckedUpdateInput.schema';

export const SituacaoUpsertSchema = z.object({
  where: SituacaoWhereUniqueInputObjectSchema,
  create: z.union([
    SituacaoCreateInputObjectSchema,
    SituacaoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SituacaoUpdateInputObjectSchema,
    SituacaoUncheckedUpdateInputObjectSchema,
  ]),
});
