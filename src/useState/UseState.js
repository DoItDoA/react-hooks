import React, { useState } from "react";

const UseState = () => {
  const [item, setItem] = useState(0); // 초기값 0
  const incrementItem = () => setItem(item + 1); //setItem 실행되어 값이 저장되고 다시 렌더링한다
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>useState {item}</h1>
      <h2>useState사용으로 버튼 누르면 숫자가 변합니다</h2>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
      <hr />
    </div>
  );
};

export default UseState;
