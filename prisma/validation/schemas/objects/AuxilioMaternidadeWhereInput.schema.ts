import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { BeneficioRelationFilterObjectSchema } from './BeneficioRelationFilter.schema';
import { BeneficioWhereInputObjectSchema } from './BeneficioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuxilioMaternidadeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuxilioMaternidadeWhereInputObjectSchema),
        z.lazy(() => AuxilioMaternidadeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AuxilioMaternidadeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuxilioMaternidadeWhereInputObjectSchema),
        z.lazy(() => AuxilioMaternidadeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nomeMae: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dataSaidaEmprego: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    dataNascimentoBebe: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    matriculaCertidao: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dataRegistro: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    contribuinteIndividual: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    dataContribuicao: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    rua: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    numero: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    bairro: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cep: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    beneficioId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    beneficio: z
      .union([
        z.lazy(() => BeneficioRelationFilterObjectSchema),
        z.lazy(() => BeneficioWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AuxilioMaternidadeWhereInputObjectSchema = Schema;
