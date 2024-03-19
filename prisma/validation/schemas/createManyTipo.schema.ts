import { z } from 'zod';
import { TipoCreateManyInputObjectSchema } from './objects/TipoCreateManyInput.schema';

export const TipoCreateManySchema = z.object({
  data: z.union([
    TipoCreateManyInputObjectSchema,
    z.array(TipoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
