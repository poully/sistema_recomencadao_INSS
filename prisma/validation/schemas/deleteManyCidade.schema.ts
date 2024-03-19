import { z } from 'zod';
import { CidadeWhereInputObjectSchema } from './objects/CidadeWhereInput.schema';

export const CidadeDeleteManySchema = z.object({
  where: CidadeWhereInputObjectSchema.optional(),
});
