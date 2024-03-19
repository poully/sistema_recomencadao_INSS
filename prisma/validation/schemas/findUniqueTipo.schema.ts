import { z } from 'zod';
import { TipoWhereUniqueInputObjectSchema } from './objects/TipoWhereUniqueInput.schema';

export const TipoFindUniqueSchema = z.object({
  where: TipoWhereUniqueInputObjectSchema,
});
