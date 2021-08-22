import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue); //초기값 'Mr.' 들어감

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true; // 나중에 false로 바뀌기 때문에 가변가능한 let 설정

    if (typeof validator === "function") {
      willUpdate = validator(value); // validator가 maxLen이어서 value에 value값을 넣는다
    }

    if (willUpdate) {
      setValue(value);
    } // 11자 부터는 setValue가 되지 않아 <input value>에서도 더이상 11자 표현이 안됨
  };

  return { value, onChange };
};

const UseInput = () => {
  const maxLen = (value) => value.length <= 10; //변수 value(값 없음) 길이가 10이하가 되게 한다. 10자 위면 false 반환

  const name = useInput("Mr.", maxLen); // 함수가 2번째 인자로 들어감
  return (
    <div className="App">
      <h1>useInput</h1>
      <h2>10자 위로는 입력이 안됩니다.</h2>
      {/* {...name} 은 value = {name.value}  onChange = {name.onChange}와 같다 */}
      <input placeholder="Name" {...name} />
      <hr />
    </div>
  );
};

export default UseInput;
