import { z } from 'zod';
import { CidadeOrderByWithRelationInputObjectSchema } from './objects/CidadeOrderByWithRelationInput.schema';
import { CidadeWhereInputObjectSchema } from './objects/CidadeWhereInput.schema';
import { CidadeWhereUniqueInputObjectSchema } from './objects/CidadeWhereUniqueInput.schema';
import { CidadeScalarFieldEnumSchema } from './enums/CidadeScalarFieldEnum.schema';

export const CidadeFindFirstSchema = z.object({
  orderBy: z
    .union([
      CidadeOrderByWithRelationInputObjectSchema,
      CidadeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CidadeWhereInputObjectSchema.optional(),
  cursor: CidadeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CidadeScalarFieldEnumSchema).optional(),
});
