import { z } from 'zod';
import { EspecialistaCreateInputObjectSchema } from './objects/EspecialistaCreateInput.schema';
import { EspecialistaUncheckedCreateInputObjectSchema } from './objects/EspecialistaUncheckedCreateInput.schema';

export const EspecialistaCreateOneSchema = z.object({
  data: z.union([
    EspecialistaCreateInputObjectSchema,
    EspecialistaUncheckedCreateInputObjectSchema,
  ]),
});
