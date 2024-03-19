import { z } from 'zod';
import { TipoUpdateInputObjectSchema } from './objects/TipoUpdateInput.schema';
import { TipoUncheckedUpdateInputObjectSchema } from './objects/TipoUncheckedUpdateInput.schema';
import { TipoWhereUniqueInputObjectSchema } from './objects/TipoWhereUniqueInput.schema';

export const TipoUpdateOneSchema = z.object({
  data: z.union([
    TipoUpdateInputObjectSchema,
    TipoUncheckedUpdateInputObjectSchema,
  ]),
  where: TipoWhereUniqueInputObjectSchema,
});
