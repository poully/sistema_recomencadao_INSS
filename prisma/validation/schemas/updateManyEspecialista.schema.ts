import { z } from 'zod';
import { EspecialistaUpdateManyMutationInputObjectSchema } from './objects/EspecialistaUpdateManyMutationInput.schema';
import { EspecialistaWhereInputObjectSchema } from './objects/EspecialistaWhereInput.schema';

export const EspecialistaUpdateManySchema = z.object({
  data: EspecialistaUpdateManyMutationInputObjectSchema,
  where: EspecialistaWhereInputObjectSchema.optional(),
});
