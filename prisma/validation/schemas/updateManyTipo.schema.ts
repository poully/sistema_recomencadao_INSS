import { z } from 'zod';
import { TipoUpdateManyMutationInputObjectSchema } from './objects/TipoUpdateManyMutationInput.schema';
import { TipoWhereInputObjectSchema } from './objects/TipoWhereInput.schema';

export const TipoUpdateManySchema = z.object({
  data: TipoUpdateManyMutationInputObjectSchema,
  where: TipoWhereInputObjectSchema.optional(),
});
