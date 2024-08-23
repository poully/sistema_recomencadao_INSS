'use client';



export async function fetcher(
    input: string,
    options?: RequestInit,
): Promise<Response> {
    //@ts-ignore
    const token = await window.Clerk.session.getToken();


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