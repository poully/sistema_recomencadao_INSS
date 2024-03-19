import { z } from 'zod';
import { CidadeWhereUniqueInputObjectSchema } from './objects/CidadeWhereUniqueInput.schema';
import { CidadeCreateInputObjectSchema } from './objects/CidadeCreateInput.schema';
import { CidadeUncheckedCreateInputObjectSchema } from './objects/CidadeUncheckedCreateInput.schema';
import { CidadeUpdateInputObjectSchema } from './objects/CidadeUpdateInput.schema';
import { CidadeUncheckedUpdateInputObjectSchema } from './objects/CidadeUncheckedUpdateInput.schema';

export const CidadeUpsertSchema = z.object({
  where: CidadeWhereUniqueInputObjectSchema,
  create: z.union([
    CidadeCreateInputObjectSchema,
    CidadeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CidadeUpdateInputObjectSchema,
    CidadeUncheckedUpdateInputObjectSchema,
  ]),
});
