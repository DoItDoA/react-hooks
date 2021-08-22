import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return { ref: element, style: { opacity: 0 } };
};

const UseFadeIn = () => {
  const fadeInH2 = useFadeIn(5, 1);
  return (
    <div>
      <h1>useFadeIn</h1>
      <h2 {...fadeInH2}>잠시 후 글이 나타남</h2>
      <hr />
    </div>
  );
};
export default UseFadeIn;
