import { z } from 'zod';
import { EstadoCreateManyInputObjectSchema } from './objects/EstadoCreateManyInput.schema';

export const EstadoCreateManySchema = z.object({
  data: z.union([
    EstadoCreateManyInputObjectSchema,
    z.array(EstadoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
