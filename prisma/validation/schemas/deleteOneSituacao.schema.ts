import { z } from 'zod';
import { SituacaoWhereUniqueInputObjectSchema } from './objects/SituacaoWhereUniqueInput.schema';

export const SituacaoDeleteOneSchema = z.object({
  where: SituacaoWhereUniqueInputObjectSchema,
});
