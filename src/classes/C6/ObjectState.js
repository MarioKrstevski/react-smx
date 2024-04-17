import React from "react";

export default function ObjectState(props) {
  const [data, setData] = React.useState({
    name: "",
    surname: "",
    address: "",
    city: "",
  });

  setData({
    ...data,
    // name: event.target.value,
  });

  return <div>ObjectState works</div>;
}
