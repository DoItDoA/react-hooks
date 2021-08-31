import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });

    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return state;
};

const UseScroll = () => {
  const { y } = useScroll();
  return (
    <div>
      <h1>useScroll</h1>
      <h2 style={{ color: y > 970 ? "red" : "blue" }}>Hi</h2>
      <hr />
    </div>
  );
};
export default UseScroll;
