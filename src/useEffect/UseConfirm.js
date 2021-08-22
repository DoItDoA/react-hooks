import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmation = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }; // 확인, 취소에 따라 호출 함수 달리함

  return confirmation;
};

const UseConfirm = () => {
  const deleteWorld = () => console.log("Delete World..");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div>
      <h1>useConfirm</h1>
      <h2>확인, 취소에 따라 콘솔 값이 다름</h2>
      <button onClick={confirmDelete}>Delete the world</button>
      <hr />
    </div>
  );
};
export default UseConfirm;
