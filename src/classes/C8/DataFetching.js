import { useEffect, useState } from "react";

export default function DataFetching(props) {
  const [data, setData] = useState(null);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
        setData(e);
      });

    // setTimeout(() => {
    //   setData([1, 2, 3, 4]);
    // }, 1000);
  }

  useEffect(function () {
    getData();
  }, []);

  if (!data) {
    return <div>Loading</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
