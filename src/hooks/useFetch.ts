import { useEffect, useState } from "react";

const useFetch = <T>(url: string, page: number) => {
  const [data, setData] = useState<{
    [page: number]: T;
  } | null>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${url}?page=${page}`)
      .then((response) => response.json())
      .then((result: T) => {
        setData((prevData) => ({
          ...prevData,
          [page]: result,
        }));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url, page]);

  return { data: data[page], loading, error };
};

export default useFetch;
