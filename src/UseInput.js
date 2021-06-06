import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue); //초기값 'Mr.' 들어감
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true; //난중에 false로 바뀌기 때문에 가변가능한 let 설정

    if (typeof validator === "function") {
      willUpdate = validator(value); //validator가 maxLen이어서 value1에 value값을 넣는다
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const UseInput = () => {
  const maxLen = (value1) => value1.length <= 10; //변수 value(값 없음) 길이가 10이하가 되게 한다
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>useInput</h1>
      <input placeholder="Name" {...name} />
      <hr />
    </div>
  );
};
//{...name} 은 value = {name.value}  onChange = {name.onChange}와 같다

export default UseInput;
