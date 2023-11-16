import { z } from 'zod';
import { AuxilioMaternidadeUpdateManyMutationInputObjectSchema } from './objects/AuxilioMaternidadeUpdateManyMutationInput.schema';
import { AuxilioMaternidadeWhereInputObjectSchema } from './objects/AuxilioMaternidadeWhereInput.schema';

export const AuxilioMaternidadeUpdateManySchema = z.object({
  data: AuxilioMaternidadeUpdateManyMutationInputObjectSchema,
  where: AuxilioMaternidadeWhereInputObjectSchema.optional(),
});
