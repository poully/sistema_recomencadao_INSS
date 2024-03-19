import { z } from 'zod';
import { CidadeCreateManyInputObjectSchema } from './objects/CidadeCreateManyInput.schema';

export const CidadeCreateManySchema = z.object({
  data: z.union([
    CidadeCreateManyInputObjectSchema,
    z.array(CidadeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
