import { z } from 'zod';
import { EstadoUpdateInputObjectSchema } from './objects/EstadoUpdateInput.schema';
import { EstadoUncheckedUpdateInputObjectSchema } from './objects/EstadoUncheckedUpdateInput.schema';
import { EstadoWhereUniqueInputObjectSchema } from './objects/EstadoWhereUniqueInput.schema';

export const EstadoUpdateOneSchema = z.object({
  data: z.union([
    EstadoUpdateInputObjectSchema,
    EstadoUncheckedUpdateInputObjectSchema,
  ]),
  where: EstadoWhereUniqueInputObjectSchema,
});
