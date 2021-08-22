import React from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener); // beforeunload는 사용자가 페이지를 떠날 때 정말로 떠날 것인지 묻는 확인 대화 상자를 표시
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <h1>usePreventLeave</h1>
      <h2>Protect버튼 누르고 창 닫을시 확인창 뜸</h2>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
      <hr />
    </div>
  );
};
export default UsePreventLeave;
