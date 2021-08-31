import React, { useEffect, useRef, useState } from "react";

const useFullScreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen(); // firefox
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen(); // opera
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen(); // mssoft
      }
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozExitFullscreen) {
      document.mozExitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };
  return { element, triggerFull, exitFull };
};

const UseFullScreen = () => {
  const { element, triggerFull, exitFull } = useFullScreen();
  return (
    <div>
      <h1>useFullScreen</h1>
      <div ref={element}>
        <img
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          width="200px"
          height="150px;"
        />
        <button onClick={exitFull}>Exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
      <hr />
    </div>
  );
};
export default UseFullScreen;
