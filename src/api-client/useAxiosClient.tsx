import { useAuth } from "@clerk/nextjs";
import axios from "axios";

export const useAxiosClient = () => {
    const { getToken, isLoaded, isSignedIn } = useAuth();

    const client = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
    client.interceptors.request.use(async (config) => {
        const token = await getToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config
    })
    return client;
}