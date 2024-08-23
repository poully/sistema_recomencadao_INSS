import { getAuthToken } from "./getAuthToken"

export async function fetcher(
    input: string,
    options?: RequestInit,
): Promise<Response> {
    const token = await getAuthToken()

    if (token) {
        options = {
            ...(options || {}),
            headers: {
                ...(options?.headers || {}),
                Authorization: `Bearer ${token}`,
            },
        }
    }

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}${input}`, options);
}