import { z } from 'zod';
import { CidadeWhereUniqueInputObjectSchema } from './objects/CidadeWhereUniqueInput.schema';

export const CidadeFindUniqueSchema = z.object({
  where: CidadeWhereUniqueInputObjectSchema,
});
