import React, { useState, useEffect } from "react";
//미완성
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
    };
  }, [onChange]);
  return status;
};

const UseNetwork = () => {
  const haddleNetworkChange = (online) => {
    console.log(onLine ? "We just went online" : "we are offline");
  };
  const onLine = useNetwork(haddleNetworkChange);
  return (
    <div>
      <h1>useNetwork</h1>
      <h2>{onLine ? "Online" : "Offline"}</h2>

      <hr />
    </div>
  );
};
export default UseNetwork;
