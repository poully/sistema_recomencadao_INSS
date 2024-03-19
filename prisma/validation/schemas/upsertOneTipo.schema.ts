import { z } from 'zod';
import { TipoWhereUniqueInputObjectSchema } from './objects/TipoWhereUniqueInput.schema';
import { TipoCreateInputObjectSchema } from './objects/TipoCreateInput.schema';
import { TipoUncheckedCreateInputObjectSchema } from './objects/TipoUncheckedCreateInput.schema';
import { TipoUpdateInputObjectSchema } from './objects/TipoUpdateInput.schema';
import { TipoUncheckedUpdateInputObjectSchema } from './objects/TipoUncheckedUpdateInput.schema';

export const TipoUpsertSchema = z.object({
  where: TipoWhereUniqueInputObjectSchema,
  create: z.union([
    TipoCreateInputObjectSchema,
    TipoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TipoUpdateInputObjectSchema,
    TipoUncheckedUpdateInputObjectSchema,
  ]),
});
