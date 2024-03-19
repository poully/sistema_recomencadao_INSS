import { z } from 'zod';
import { EstadoWhereInputObjectSchema } from './objects/EstadoWhereInput.schema';

export const EstadoDeleteManySchema = z.object({
  where: EstadoWhereInputObjectSchema.optional(),
});
