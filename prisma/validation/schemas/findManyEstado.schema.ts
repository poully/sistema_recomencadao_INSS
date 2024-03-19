import { z } from 'zod';
import { EstadoOrderByWithRelationInputObjectSchema } from './objects/EstadoOrderByWithRelationInput.schema';
import { EstadoWhereInputObjectSchema } from './objects/EstadoWhereInput.schema';
import { EstadoWhereUniqueInputObjectSchema } from './objects/EstadoWhereUniqueInput.schema';
import { EstadoScalarFieldEnumSchema } from './enums/EstadoScalarFieldEnum.schema';

export const EstadoFindManySchema = z.object({
  orderBy: z
    .union([
      EstadoOrderByWithRelationInputObjectSchema,
      EstadoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EstadoWhereInputObjectSchema.optional(),
  cursor: EstadoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EstadoScalarFieldEnumSchema).optional(),
});
