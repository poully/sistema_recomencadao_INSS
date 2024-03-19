import { z } from 'zod';
import { EspecialistaWhereUniqueInputObjectSchema } from './objects/EspecialistaWhereUniqueInput.schema';

export const EspecialistaDeleteOneSchema = z.object({
  where: EspecialistaWhereUniqueInputObjectSchema,
});
