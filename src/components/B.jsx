"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const B = () => {
  const [loc, setLoc] = useState();
  const dispatch = useDispatch(); // used to dispatch or pass the data to reducer
  const handleChange = (eve) => {
    setLoc(eve.target.value);
  };
  const handleClick = () => {
    alert(loc);
  };
  return (
    <div>
      <h1>B</h1>
      <p>
        <b>Location: </b>
        <input onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
      </p>
    </div>
  );
};
