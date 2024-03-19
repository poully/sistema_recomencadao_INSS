import { z } from 'zod';
import { EstadoUpdateManyMutationInputObjectSchema } from './objects/EstadoUpdateManyMutationInput.schema';
import { EstadoWhereInputObjectSchema } from './objects/EstadoWhereInput.schema';

export const EstadoUpdateManySchema = z.object({
  data: EstadoUpdateManyMutationInputObjectSchema,
  where: EstadoWhereInputObjectSchema.optional(),
});
