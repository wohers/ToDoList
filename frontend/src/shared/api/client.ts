import axios from "axios";
import { ENDPOINTS } from "./endpoints";

export type TEndpoints = keyof typeof ENDPOINTS;

export const baseAxios = <T>(
  url: TEndpoints,
  method: "GET" | "POST" | "DELETE" | "PATCH",
  body: unknown = null,
  security: boolean = false
): Promise<T> => {
  const baseUrl = import.meta.env.VITE_URL;
  const headers: Record<string, string> = {};

  if (body && method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  if (security) {
    const token = localStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const config = {
    method,
    url: `${baseUrl}/${url}`,
    headers,
    data: body ? JSON.stringify(body) : null,
  };

  return axios(config)
    .then((response) => response.data as T)
    .catch((error) => {
      throw error;
    });
};
