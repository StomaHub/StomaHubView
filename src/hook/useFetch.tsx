import { useState, useEffect } from "react";

// os métodos suportados
export interface FetchOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
}

// Resultado do hook
export interface UseFetchResult<T> {
  data: T | null;
  isPending: boolean;
  error: string | null;
  fetchData: (options?: FetchOptions) => Promise<void>;
}

const useFetch = <T = any >(initialUrl?: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null); //inicia com nuul
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState(initialUrl);

  const fetchData = async (options?: FetchOptions) => {
    if (!url && !options?.method) return;
    setIsPending(true);
    setError(null);

    try {
      const res = await fetch(url || "", {
        method: options?.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options.body) : undefined,
      });

      if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`);

      const result = await res.json();
      setData(result);
    } catch (err: any) {
      setError(err.message );
    } finally {
      setIsPending(false);
    }
  };


  useEffect(() => {
    if (initialUrl) fetchData({ method: "GET" });
  }, [initialUrl]);

  return { data, isPending, error, fetchData };
};

export default useFetch;
