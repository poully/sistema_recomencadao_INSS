import { z } from 'zod';
import { DocumentoHasBeneficioWhereUniqueInputObjectSchema } from './objects/DocumentoHasBeneficioWhereUniqueInput.schema';
import { DocumentoHasBeneficioCreateInputObjectSchema } from './objects/DocumentoHasBeneficioCreateInput.schema';
import { DocumentoHasBeneficioUncheckedCreateInputObjectSchema } from './objects/DocumentoHasBeneficioUncheckedCreateInput.schema';
import { DocumentoHasBeneficioUpdateInputObjectSchema } from './objects/DocumentoHasBeneficioUpdateInput.schema';
import { DocumentoHasBeneficioUncheckedUpdateInputObjectSchema } from './objects/DocumentoHasBeneficioUncheckedUpdateInput.schema';

export const DocumentoHasBeneficioUpsertSchema = z.object({
  where: DocumentoHasBeneficioWhereUniqueInputObjectSchema,
  create: z.union([
    DocumentoHasBeneficioCreateInputObjectSchema,
    DocumentoHasBeneficioUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DocumentoHasBeneficioUpdateInputObjectSchema,
    DocumentoHasBeneficioUncheckedUpdateInputObjectSchema,
  ]),
});
