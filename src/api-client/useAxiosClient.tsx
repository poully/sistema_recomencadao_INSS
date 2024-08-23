import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export const useAxiosClient = () => {

    //const { getToken } = auth();

    const client = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        withCredentials: true,
    });
    /*client.interceptors.request.use(async (config) => {
        const token = await getToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config
    })*/
    return client;
}