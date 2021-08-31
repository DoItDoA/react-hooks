import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const UseNotification = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi",
  });
  return (
    <div>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>hello</button>

      <hr />
    </div>
  );
};
export default UseNotification;
