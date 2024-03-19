import { z } from 'zod';

export const BeneficioScalarFieldEnumSchema = z.enum([
  'id',
  'numero_beneficio',
  'situacao_id',
  'pessoa_id',
  'tipo_id',
  'especialista_id',
]);
