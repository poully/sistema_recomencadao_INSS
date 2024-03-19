import { z } from 'zod';
import { EspecialistaWhereInputObjectSchema } from './objects/EspecialistaWhereInput.schema';

export const EspecialistaDeleteManySchema = z.object({
  where: EspecialistaWhereInputObjectSchema.optional(),
});
