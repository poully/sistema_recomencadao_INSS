import { z } from 'zod';
import { EspecialistaWhereUniqueInputObjectSchema } from './objects/EspecialistaWhereUniqueInput.schema';

export const EspecialistaFindUniqueSchema = z.object({
  where: EspecialistaWhereUniqueInputObjectSchema,
});
