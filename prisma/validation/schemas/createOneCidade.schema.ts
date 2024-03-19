import { z } from 'zod';
import { CidadeCreateInputObjectSchema } from './objects/CidadeCreateInput.schema';
import { CidadeUncheckedCreateInputObjectSchema } from './objects/CidadeUncheckedCreateInput.schema';

export const CidadeCreateOneSchema = z.object({
  data: z.union([
    CidadeCreateInputObjectSchema,
    CidadeUncheckedCreateInputObjectSchema,
  ]),
});
