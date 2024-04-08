import React, { useReducer } from "react";

const initialValue = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return;
  }
}

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
    </div>
  );
};

export default Usereducer;