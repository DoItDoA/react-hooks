import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]); // 렌더링 후 title이 바뀔때마다 함수 실행, 5초후 set 실행으로 작동
  return setTitle;
};

const UseTitle = () => {
  const titleUpdater = useTitle("Loading..."); // titleUpdater는 set이다
  setTimeout(() => titleUpdater("Home"), 5000); // 5초후 set실행
  return (
    <div>
      <h1>useTitle</h1>
      <h2>5초 후에 타이틀이 변경됨</h2>
      <hr />
    </div>
  );
};
export default UseTitle;
