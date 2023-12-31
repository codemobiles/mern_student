import React, { useState } from "react";

export default function App() {
  // Implicit Declaration
  const tmp1 = "Hey";
  const tmp2 = 20;
  const tmp3 = true;

  // Explicit Declaration
  let count: number = 0; // none side effect variables

  // const [score, setScore] = React.useState(0); // side effect variables
  const [score, setScore] = useState(0);

  function MyBox() {
    return <div>MyBox</div>;
  }

  // Component
  type AnotherBoxProps = {
    title: string;
    subtitle: string;
    version?: number;
  };

  const AnotherBox = ({ title, subtitle, version }: AnotherBoxProps) => {
    return (
      <div>
        Another Box:
        <ul>
          <li>{title}</li>
          <li>{subtitle}</li>
          <li>{version}</li>
          <li>{count}</li>
          <li>{score}</li>
        </ul>
      </div>
    );
  };

  // MVVM;
  return (
    <div>
      App {tmp1}, {tmp2}, {tmp3 ? "Yes" : "No"}
      <MyBox />
      <AnotherBox title="Lek" subtitle="555" version={10} />
      <button
        onClick={() => {
          count++;
          console.log("Count: " + count);
        }}
      >
        ClickMe
      </button>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        Add Score
      </button>
    </div>
  );
}
