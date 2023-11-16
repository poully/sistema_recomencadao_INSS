import { z } from 'zod';
import { AuxilioMaternidadeCreateInputObjectSchema } from './objects/AuxilioMaternidadeCreateInput.schema';
import { AuxilioMaternidadeUncheckedCreateInputObjectSchema } from './objects/AuxilioMaternidadeUncheckedCreateInput.schema';

export const AuxilioMaternidadeCreateOneSchema = z.object({
  data: z.union([
    AuxilioMaternidadeCreateInputObjectSchema,
    AuxilioMaternidadeUncheckedCreateInputObjectSchema,
  ]),
});
