import { z } from 'zod';

export const DocumentoScalarFieldEnumSchema = z.enum([
  'id',
  'registro',
  'comprovanteResidencia',
  'comprovanteRenda',
  'caminho',
]);
