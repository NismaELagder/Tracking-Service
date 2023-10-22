import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          return data
            .text()
            .then((text) => new Error(text));
        }

        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err));

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error };
}

export default useFetch;
