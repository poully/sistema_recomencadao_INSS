import { z } from 'zod';
import { SituacaoWhereUniqueInputObjectSchema } from './objects/SituacaoWhereUniqueInput.schema';

export const SituacaoFindUniqueSchema = z.object({
  where: SituacaoWhereUniqueInputObjectSchema,
});
