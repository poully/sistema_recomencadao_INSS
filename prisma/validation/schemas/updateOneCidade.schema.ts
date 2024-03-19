import { z } from 'zod';
import { CidadeUpdateInputObjectSchema } from './objects/CidadeUpdateInput.schema';
import { CidadeUncheckedUpdateInputObjectSchema } from './objects/CidadeUncheckedUpdateInput.schema';
import { CidadeWhereUniqueInputObjectSchema } from './objects/CidadeWhereUniqueInput.schema';

export const CidadeUpdateOneSchema = z.object({
  data: z.union([
    CidadeUpdateInputObjectSchema,
    CidadeUncheckedUpdateInputObjectSchema,
  ]),
  where: CidadeWhereUniqueInputObjectSchema,
});
