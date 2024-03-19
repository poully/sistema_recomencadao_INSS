import { z } from 'zod';
import { SituacaoWhereInputObjectSchema } from './objects/SituacaoWhereInput.schema';

export const SituacaoDeleteManySchema = z.object({
  where: SituacaoWhereInputObjectSchema.optional(),
});
