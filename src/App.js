import React from "react";
import UseState from "./useState/UseState";
import UseInput from "./useState/UseInput";
import UseTabs from "./useState/UseTabs";
import UseTitle from "./useEffect/UseTitle";
import UseClick from "./useEffect/UseClick";
import UseConfirm from "./useEffect/UseConfirm";
import UsePreventLeave from "./useEffect/UsePreventLeave";
import UseFadeIn from "./useEffect/UseFadeIn";
import UseNetwork from "./useEffect/UseNetwork";

const App = () => {
  return (
    <>
      <UseState />
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseFadeIn />
      <UseNetwork />
    </>
  );
};

export default App;
