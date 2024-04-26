import { useState } from "react";

const tabsInfo = [
  {
    title: "Header 1",
    content: "Text 1",
  },
  {
    title: "Header 2",
    content: "Text 2",
  },
  {
    title: "Header 3",
    content: "Text 3",
  },
];
export default function Tabs(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 5,
          borderBottom: "1px solid black",
        }}
      >
        {tabsInfo.map((tab, index) => (
          <div
            style={{
              color: index === activeTabIndex ? "blue" : "black",
            }}
            onClick={function () {
              setActiveTabIndex(index);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div style={{ padding: 10 }}>
        {tabsInfo[activeTabIndex].content}
      </div>
    </div>
  );
}
