import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PessoaScalarWhereInputObjectSchema),
        z.lazy(() => PessoaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PessoaScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PessoaScalarWhereInputObjectSchema),
        z.lazy(() => PessoaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nome: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    endereco: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    telefone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    data_nasc: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    cpf: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cnis: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cidade_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PessoaScalarWhereInputObjectSchema = Schema;
