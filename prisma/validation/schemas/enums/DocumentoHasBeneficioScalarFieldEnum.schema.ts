import { z } from 'zod';

export const DocumentoHasBeneficioScalarFieldEnumSchema = z.enum([
  'documento_id',
  'beneficio_id',
]);
