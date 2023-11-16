import { z } from 'zod';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './objects/AuxilioMaternidadeWhereUniqueInput.schema';
import { AuxilioMaternidadeCreateInputObjectSchema } from './objects/AuxilioMaternidadeCreateInput.schema';
import { AuxilioMaternidadeUncheckedCreateInputObjectSchema } from './objects/AuxilioMaternidadeUncheckedCreateInput.schema';
import { AuxilioMaternidadeUpdateInputObjectSchema } from './objects/AuxilioMaternidadeUpdateInput.schema';
import { AuxilioMaternidadeUncheckedUpdateInputObjectSchema } from './objects/AuxilioMaternidadeUncheckedUpdateInput.schema';

export const AuxilioMaternidadeUpsertSchema = z.object({
  where: AuxilioMaternidadeWhereUniqueInputObjectSchema,
  create: z.union([
    AuxilioMaternidadeCreateInputObjectSchema,
    AuxilioMaternidadeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AuxilioMaternidadeUpdateInputObjectSchema,
    AuxilioMaternidadeUncheckedUpdateInputObjectSchema,
  ]),
});
