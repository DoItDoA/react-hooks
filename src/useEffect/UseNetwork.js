import React, { useState, useEffect } from "react";
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); // navigator.onLine는 브라우저의 온라인 상태를 반환한다. 온라인이면 true 오프라인이면 false

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange); // 브라우저가 온라인이 될 때 실행
    window.addEventListener("offline", handleChange); // 브라우저가 오프라인이 될 때 실행
  }, []);

  return status;
};

const UseNetwork = () => {
  const haddleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "we are offline");
  };
  const onLine = useNetwork(haddleNetworkChange);
  return (
    <div>
      <h1>useNetwork</h1>
      <h2>{onLine ? "Online" : "Offline"}</h2>
      <h2>F12 누르고 network로 가서 온오프라인 설정</h2>
      <hr />
    </div>
  );
};
export default UseNetwork;
