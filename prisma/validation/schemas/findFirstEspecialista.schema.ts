import { z } from 'zod';
import { EspecialistaOrderByWithRelationInputObjectSchema } from './objects/EspecialistaOrderByWithRelationInput.schema';
import { EspecialistaWhereInputObjectSchema } from './objects/EspecialistaWhereInput.schema';
import { EspecialistaWhereUniqueInputObjectSchema } from './objects/EspecialistaWhereUniqueInput.schema';
import { EspecialistaScalarFieldEnumSchema } from './enums/EspecialistaScalarFieldEnum.schema';

export const EspecialistaFindFirstSchema = z.object({
  orderBy: z
    .union([
      EspecialistaOrderByWithRelationInputObjectSchema,
      EspecialistaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EspecialistaWhereInputObjectSchema.optional(),
  cursor: EspecialistaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EspecialistaScalarFieldEnumSchema).optional(),
});
