import { z } from 'zod';
import { AuxilioMaternidadeWhereInputObjectSchema } from './objects/AuxilioMaternidadeWhereInput.schema';
import { AuxilioMaternidadeOrderByWithAggregationInputObjectSchema } from './objects/AuxilioMaternidadeOrderByWithAggregationInput.schema';
import { AuxilioMaternidadeScalarWhereWithAggregatesInputObjectSchema } from './objects/AuxilioMaternidadeScalarWhereWithAggregatesInput.schema';
import { AuxilioMaternidadeScalarFieldEnumSchema } from './enums/AuxilioMaternidadeScalarFieldEnum.schema';

export const AuxilioMaternidadeGroupBySchema = z.object({
  where: AuxilioMaternidadeWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AuxilioMaternidadeOrderByWithAggregationInputObjectSchema,
      AuxilioMaternidadeOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    AuxilioMaternidadeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AuxilioMaternidadeScalarFieldEnumSchema),
});
