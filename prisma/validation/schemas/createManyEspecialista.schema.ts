import { z } from 'zod';
import { EspecialistaCreateManyInputObjectSchema } from './objects/EspecialistaCreateManyInput.schema';

export const EspecialistaCreateManySchema = z.object({
  data: z.union([
    EspecialistaCreateManyInputObjectSchema,
    z.array(EspecialistaCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
