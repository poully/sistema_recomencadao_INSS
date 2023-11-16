import { z } from 'zod';
import { AuxilioMaternidadeCreateManyInputObjectSchema } from './objects/AuxilioMaternidadeCreateManyInput.schema';

export const AuxilioMaternidadeCreateManySchema = z.object({
  data: z.union([
    AuxilioMaternidadeCreateManyInputObjectSchema,
    z.array(AuxilioMaternidadeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
