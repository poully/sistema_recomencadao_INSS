import { z } from 'zod';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './objects/AuxilioMaternidadeWhereUniqueInput.schema';

export const AuxilioMaternidadeFindUniqueSchema = z.object({
  where: AuxilioMaternidadeWhereUniqueInputObjectSchema,
});
