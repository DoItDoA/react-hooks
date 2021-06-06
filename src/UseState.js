import React, { useState } from "react";

const UseState = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1); //setItem 실행되어 값이 저장되고 다시 렌더링한다
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>useState {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
      <hr />
    </div>
  );
};

export default UseState;
