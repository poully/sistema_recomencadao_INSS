import { z } from 'zod';
import { TipoOrderByWithRelationInputObjectSchema } from './objects/TipoOrderByWithRelationInput.schema';
import { TipoWhereInputObjectSchema } from './objects/TipoWhereInput.schema';
import { TipoWhereUniqueInputObjectSchema } from './objects/TipoWhereUniqueInput.schema';
import { TipoScalarFieldEnumSchema } from './enums/TipoScalarFieldEnum.schema';

export const TipoFindManySchema = z.object({
  orderBy: z
    .union([
      TipoOrderByWithRelationInputObjectSchema,
      TipoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TipoWhereInputObjectSchema.optional(),
  cursor: TipoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TipoScalarFieldEnumSchema).optional(),
});
