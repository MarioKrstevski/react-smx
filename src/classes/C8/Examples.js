import React, { useState, useEffect } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;

import React, { useState, useEffect } from "react";

const EventListenerComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to add event listener only once

  return (
    <div>
      <h1>Window Resize Example</h1>
      <p>Window width: {windowSize.width}</p>
      <p>Window height: {windowSize.height}</p>
    </div>
  );
};

import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to set up timer only once

  return (
    <div>
      <h1>Timer Example</h1>
      <p>Seconds remaining: {seconds}</p>
    </div>
  );
};

import React, { useEffect } from "react";

const DocumentTitleComponent = () => {
  useEffect(() => {
    document.title = "New Document Title";

    // Clean up by resetting the document title
    return () => {
      document.title = "React App";
    };
  }, []); // Empty dependency array to update document title only once

  return (
    <div>
      <h1>Document Title Example</h1>
      <p>This component updates the document title.</p>
    </div>
  );
};
