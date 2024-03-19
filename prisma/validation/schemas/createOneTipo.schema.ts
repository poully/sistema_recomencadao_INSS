import { z } from 'zod';
import { TipoCreateInputObjectSchema } from './objects/TipoCreateInput.schema';
import { TipoUncheckedCreateInputObjectSchema } from './objects/TipoUncheckedCreateInput.schema';

export const TipoCreateOneSchema = z.object({
  data: z.union([
    TipoCreateInputObjectSchema,
    TipoUncheckedCreateInputObjectSchema,
  ]),
});
