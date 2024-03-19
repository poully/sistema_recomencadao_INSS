import { z } from 'zod';
import { CidadeWhereUniqueInputObjectSchema } from './objects/CidadeWhereUniqueInput.schema';

export const CidadeDeleteOneSchema = z.object({
  where: CidadeWhereUniqueInputObjectSchema,
});
