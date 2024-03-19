import { z } from 'zod';
import { EspecialistaWhereUniqueInputObjectSchema } from './objects/EspecialistaWhereUniqueInput.schema';
import { EspecialistaCreateInputObjectSchema } from './objects/EspecialistaCreateInput.schema';
import { EspecialistaUncheckedCreateInputObjectSchema } from './objects/EspecialistaUncheckedCreateInput.schema';
import { EspecialistaUpdateInputObjectSchema } from './objects/EspecialistaUpdateInput.schema';
import { EspecialistaUncheckedUpdateInputObjectSchema } from './objects/EspecialistaUncheckedUpdateInput.schema';

export const EspecialistaUpsertSchema = z.object({
  where: EspecialistaWhereUniqueInputObjectSchema,
  create: z.union([
    EspecialistaCreateInputObjectSchema,
    EspecialistaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EspecialistaUpdateInputObjectSchema,
    EspecialistaUncheckedUpdateInputObjectSchema,
  ]),
});
