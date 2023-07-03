import React from "react";
import BasicButtons from "./components/fragments/DemoButtons";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <div style={{ color: "red", backgroundColor: "yellow" }}>App</div>
      <div className="text-orange-500 bg-black w-10 rounded-md text-center p-6 m-3">
        Hey
      </div>
      <BasicButtons />
    </div>
  );
}
