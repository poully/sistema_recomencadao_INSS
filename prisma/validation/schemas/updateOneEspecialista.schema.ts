import { z } from 'zod';
import { EspecialistaUpdateInputObjectSchema } from './objects/EspecialistaUpdateInput.schema';
import { EspecialistaUncheckedUpdateInputObjectSchema } from './objects/EspecialistaUncheckedUpdateInput.schema';
import { EspecialistaWhereUniqueInputObjectSchema } from './objects/EspecialistaWhereUniqueInput.schema';

export const EspecialistaUpdateOneSchema = z.object({
  data: z.union([
    EspecialistaUpdateInputObjectSchema,
    EspecialistaUncheckedUpdateInputObjectSchema,
  ]),
  where: EspecialistaWhereUniqueInputObjectSchema,
});
