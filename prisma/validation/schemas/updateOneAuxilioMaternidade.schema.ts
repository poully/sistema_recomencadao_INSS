import { z } from 'zod';
import { AuxilioMaternidadeUpdateInputObjectSchema } from './objects/AuxilioMaternidadeUpdateInput.schema';
import { AuxilioMaternidadeUncheckedUpdateInputObjectSchema } from './objects/AuxilioMaternidadeUncheckedUpdateInput.schema';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './objects/AuxilioMaternidadeWhereUniqueInput.schema';

export const AuxilioMaternidadeUpdateOneSchema = z.object({
  data: z.union([
    AuxilioMaternidadeUpdateInputObjectSchema,
    AuxilioMaternidadeUncheckedUpdateInputObjectSchema,
  ]),
  where: AuxilioMaternidadeWhereUniqueInputObjectSchema,
});
