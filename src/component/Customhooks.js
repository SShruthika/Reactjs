import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return(
  <div>
  [data];

  <h1>git check</h1>
  </div>
  )
};

export default useFetch;

