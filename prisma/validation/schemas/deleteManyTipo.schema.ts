import { z } from 'zod';
import { TipoWhereInputObjectSchema } from './objects/TipoWhereInput.schema';

export const TipoDeleteManySchema = z.object({
  where: TipoWhereInputObjectSchema.optional(),
});
