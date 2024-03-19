import { z } from 'zod';
import { SituacaoUpdateInputObjectSchema } from './objects/SituacaoUpdateInput.schema';
import { SituacaoUncheckedUpdateInputObjectSchema } from './objects/SituacaoUncheckedUpdateInput.schema';
import { SituacaoWhereUniqueInputObjectSchema } from './objects/SituacaoWhereUniqueInput.schema';

export const SituacaoUpdateOneSchema = z.object({
  data: z.union([
    SituacaoUpdateInputObjectSchema,
    SituacaoUncheckedUpdateInputObjectSchema,
  ]),
  where: SituacaoWhereUniqueInputObjectSchema,
});
