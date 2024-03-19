import { z } from 'zod';
import { EstadoWhereUniqueInputObjectSchema } from './objects/EstadoWhereUniqueInput.schema';
import { EstadoCreateInputObjectSchema } from './objects/EstadoCreateInput.schema';
import { EstadoUncheckedCreateInputObjectSchema } from './objects/EstadoUncheckedCreateInput.schema';
import { EstadoUpdateInputObjectSchema } from './objects/EstadoUpdateInput.schema';
import { EstadoUncheckedUpdateInputObjectSchema } from './objects/EstadoUncheckedUpdateInput.schema';

export const EstadoUpsertSchema = z.object({
  where: EstadoWhereUniqueInputObjectSchema,
  create: z.union([
    EstadoCreateInputObjectSchema,
    EstadoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EstadoUpdateInputObjectSchema,
    EstadoUncheckedUpdateInputObjectSchema,
  ]),
});
