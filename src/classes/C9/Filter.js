import { useState } from "react";

export default function Filter(props) {
  const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const startTodos = [
    { id: 1, text: "Complete homework assignment", completed: false },
    { id: 2, text: "Go for a run", completed: true },
    { id: 3, text: "Buy groceries", completed: false },
    { id: 4, text: "Call mom", completed: true },
    { id: 5, text: "Read a book", completed: false },
  ];

  // const query = ""
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {startTodos
        .filter((t) => t.text.toLowerCase().includes(query))
        .map((t) => (
          <div>{t.text}</div>
        ))}
    </div>
  );
}
