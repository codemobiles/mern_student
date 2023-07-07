import React from "react";
import { useSelector } from "react-redux";
import { add, appSelector, remove } from "./store/appSlice";
import { useAppDispatch } from "./store/store";

export default function App() {
  const appReducer = useSelector(appSelector);
  const dispatch = useAppDispatch();

  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <button onClick={() => dispatch(remove())}>Remove</button>
      <h3>{appReducer.count}</h3>
      <button onClick={() => dispatch(add())}>Add</button>
    </div>
  );
}
