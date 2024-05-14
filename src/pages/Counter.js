import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseByValue, increaseCounter } from '../store/slices/counter';

export default function Counter() {
  const counter = useSelector(state => state.counter.counterVal);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter Page</h2>
      <hr />
      <div className="d-flex align-items-center">
        <button className="btn btn-danger" onClick={() => dispatch(decreaseCounter())}>-1</button>
        <p className="mx-5 mb-0">{counter}</p>
        <button className="btn btn-success" onClick={() => dispatch(increaseCounter())}>+1</button>
        <button className="btn btn-success mx-2" onClick={() => dispatch(increaseByValue(5))}>+5</button>
      </div>
    </>
  );
}
