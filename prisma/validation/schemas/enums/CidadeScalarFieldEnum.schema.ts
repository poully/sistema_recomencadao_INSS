import { z } from 'zod';

export const CidadeScalarFieldEnumSchema = z.enum(['id', 'nome', 'estado_id']);
