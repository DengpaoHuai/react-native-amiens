import { useEffect, useState } from "react";
import { PeopleResponse } from "../components/PeopleList";

type Data<T> = {
  [key: string]: T;
};

type Data1<T> = Record<string, T>;

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<Data<T> | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data && data[url]) return;
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result: T) => {
        setData({
          [url]: result,
          ...data,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data: data && data[url] ? data[url] : null, loading };
};

export default useFetch;
