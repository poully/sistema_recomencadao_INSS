import { z } from 'zod';
import { TipoWhereUniqueInputObjectSchema } from './objects/TipoWhereUniqueInput.schema';

export const TipoDeleteOneSchema = z.object({
  where: TipoWhereUniqueInputObjectSchema,
});
