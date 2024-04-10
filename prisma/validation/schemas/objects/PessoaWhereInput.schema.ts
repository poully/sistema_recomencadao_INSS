import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BeneficioListRelationFilterObjectSchema } from './BeneficioListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PessoaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PessoaWhereInputObjectSchema),
        z.lazy(() => PessoaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PessoaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PessoaWhereInputObjectSchema),
        z.lazy(() => PessoaWhereInputObjectSchema).array(),
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
    cidade_ibge_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Beneficio: z.lazy(() => BeneficioListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const PessoaWhereInputObjectSchema = Schema;
