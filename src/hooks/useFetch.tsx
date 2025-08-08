import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await axios.get(url);
        if (response.data.success && isMounted) {
          setData(response.data.data);
        }
      } catch (err) {
        if (isMounted && err) {
          setError("Failed to fetch data");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
