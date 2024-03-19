import { z } from 'zod';
import { EstadoWhereUniqueInputObjectSchema } from './objects/EstadoWhereUniqueInput.schema';

export const EstadoDeleteOneSchema = z.object({
  where: EstadoWhereUniqueInputObjectSchema,
});
