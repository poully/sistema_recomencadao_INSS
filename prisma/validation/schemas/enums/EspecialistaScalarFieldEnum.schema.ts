import { z } from 'zod';

export const EspecialistaScalarFieldEnumSchema = z.enum([
  'id',
  'nome',
  'email',
  'telefone',
  'endereco',
  'cidade_ibge_id',
]);
