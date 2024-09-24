import { useState, useCallback, useEffect } from 'react';

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

function useFetch<T>(endpoint: string, method: 'GET' | 'POST'): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [trigger, setTrigger] = useState<number>(0);

  const refetch = useCallback(() => {
    setTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}${endpoint}`,
          {
            method,
            headers: {
              'Content-Type': 'application/json',
              // 'Cache-Control': 'no-cache',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: T = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, trigger]);

  return { data, isLoading, error, refetch };
}

export default useFetch;
