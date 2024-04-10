import { auth } from "@clerk/nextjs";
import axios from "axios";

export const useAxiosClient = () => {

    const { getToken } = auth();

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