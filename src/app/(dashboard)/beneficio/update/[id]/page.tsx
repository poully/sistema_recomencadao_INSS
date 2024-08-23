'use client';

import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Beneficio } from '@prisma/client';
import { useEffect, useTransition } from 'react';

export type BeneficioFormInput = Omit<Beneficio, "id">;

