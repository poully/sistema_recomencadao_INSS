import { z } from 'zod';
import { EstadoWhereUniqueInputObjectSchema } from './objects/EstadoWhereUniqueInput.schema';

export const EstadoFindUniqueSchema = z.object({
  where: EstadoWhereUniqueInputObjectSchema,
});
