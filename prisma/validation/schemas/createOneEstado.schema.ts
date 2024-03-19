import { z } from 'zod';
import { EstadoCreateInputObjectSchema } from './objects/EstadoCreateInput.schema';
import { EstadoUncheckedCreateInputObjectSchema } from './objects/EstadoUncheckedCreateInput.schema';

export const EstadoCreateOneSchema = z.object({
  data: z.union([
    EstadoCreateInputObjectSchema,
    EstadoUncheckedCreateInputObjectSchema,
  ]),
});
