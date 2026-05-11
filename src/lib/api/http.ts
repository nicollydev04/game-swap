import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000",
  timeout: 15_000,
});

// Quando entrar o Supabase Auth:
// http.interceptors.request.use((config) => {
//   const token = ...;
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
