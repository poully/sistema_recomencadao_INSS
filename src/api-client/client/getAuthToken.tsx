'use client';

import { useAuth } from '@clerk/nextjs'

export async function getAuthToken() {
    const { getToken } = useAuth();
    return await getToken();
}
