import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab); //초기값 0 받는다

  if (!allTabs || !Array.isArray(allTabs)) {
    //Array.isArray() 메서드는 해당인자가 Array인지 알려준다
    return;
  }
  //allTabs[currentIndex] = allTabs[0]  배열 allTabs중 첫번째 가리킨다
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
  //밑의 {currentItem, changeItem}와 이름이 같아야한다
};

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      <h1>useTabs</h1>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabs;
