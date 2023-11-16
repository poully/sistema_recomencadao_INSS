import { z } from 'zod';
import { AuxilioMaternidadeWhereInputObjectSchema } from './objects/AuxilioMaternidadeWhereInput.schema';

export const AuxilioMaternidadeDeleteManySchema = z.object({
  where: AuxilioMaternidadeWhereInputObjectSchema.optional(),
});
