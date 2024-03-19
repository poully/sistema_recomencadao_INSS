import { z } from 'zod';
import { SituacaoOrderByWithRelationInputObjectSchema } from './objects/SituacaoOrderByWithRelationInput.schema';
import { SituacaoWhereInputObjectSchema } from './objects/SituacaoWhereInput.schema';
import { SituacaoWhereUniqueInputObjectSchema } from './objects/SituacaoWhereUniqueInput.schema';
import { SituacaoScalarFieldEnumSchema } from './enums/SituacaoScalarFieldEnum.schema';

export const SituacaoFindFirstSchema = z.object({
  orderBy: z
    .union([
      SituacaoOrderByWithRelationInputObjectSchema,
      SituacaoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SituacaoWhereInputObjectSchema.optional(),
  cursor: SituacaoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SituacaoScalarFieldEnumSchema).optional(),
});
