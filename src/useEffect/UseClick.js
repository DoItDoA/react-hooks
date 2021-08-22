import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const ref = useRef(); // console.log(ref.current)하면 getElementById와 같은 결과 나옴

  useEffect(() => {
    const element = ref.current; // 따로 변수 할당해야 경고가 안뜸

    if (element) {
      element.addEventListener("click", onClick);
      element.style.cursor = "pointer";
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    }; // componentWillUnmount역할하고 내부 코드 수정시 실행된다. 즉 이게 없을 때 코드수정하고 새로고침 안하면 add이벤트가 중첩이 된다
  }, [onClick]);

  if (typeof onClick !== "function") {
    return;
  }
  return ref;
};

const UseClick = () => {
  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1>useClick</h1>
      {/* ref={title}은 id="id" 지정하는 것처럼 같음 */}
      <h2 ref={title}>이 글을 클릭시 콘솔에 Hello가 뜸</h2>
      <hr />
    </div>
  );
};
export default UseClick;
