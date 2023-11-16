import { z } from 'zod';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './objects/AuxilioMaternidadeWhereUniqueInput.schema';

export const AuxilioMaternidadeDeleteOneSchema = z.object({
  where: AuxilioMaternidadeWhereUniqueInputObjectSchema,
});
