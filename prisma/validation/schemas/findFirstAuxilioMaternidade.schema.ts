import { z } from 'zod';
import { AuxilioMaternidadeOrderByWithRelationInputObjectSchema } from './objects/AuxilioMaternidadeOrderByWithRelationInput.schema';
import { AuxilioMaternidadeWhereInputObjectSchema } from './objects/AuxilioMaternidadeWhereInput.schema';
import { AuxilioMaternidadeWhereUniqueInputObjectSchema } from './objects/AuxilioMaternidadeWhereUniqueInput.schema';
import { AuxilioMaternidadeScalarFieldEnumSchema } from './enums/AuxilioMaternidadeScalarFieldEnum.schema';

export const AuxilioMaternidadeFindFirstSchema = z.object({
  orderBy: z
    .union([
      AuxilioMaternidadeOrderByWithRelationInputObjectSchema,
      AuxilioMaternidadeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AuxilioMaternidadeWhereInputObjectSchema.optional(),
  cursor: AuxilioMaternidadeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AuxilioMaternidadeScalarFieldEnumSchema).optional(),
});
