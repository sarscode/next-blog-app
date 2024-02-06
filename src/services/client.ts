import axios from "axios";
import type { AxiosResponse } from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

class AxiosClient {
  async get<T>(endpoint: string, query?: string | number): Promise<T> {
    const res: AxiosResponse = await Axios.get(endpoint, { params: query });
    return res.data;
  }
  async post<T>(endpoint: string, body: any): Promise<T> {
    const res: AxiosResponse = await Axios.post(endpoint, body);
    return res.data;
  }
}

const axiosClient = new AxiosClient();

export default axiosClient;
