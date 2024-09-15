import React, { useRef, useState } from "react";
import Container from "./Container/Container";

import "./App.css";
import "./Container/Container.css";

const App = () => {
  const [boxList, setBoxList] = useState([
    { id: 0, color: "white" },
    { id: 1, color: "white" },
    { id: 2, color: "white" },
    { id: 3, color: "white" },
    { id: 4, color: "white" },
    { id: 5, color: "white" },
    { id: 6, color: "white" },
  ]);
  const orderList = useRef([]);

  const checkAllBoxSelected = (boxList) =>
    boxList.every((box) => box.color === "green");

  const handleBoxClick = (e, id) => {
    const newBoxList = [...boxList];
    newBoxList[id].color = "green";
    orderList.current.push(id);
    setBoxList(newBoxList);

    if (checkAllBoxSelected(newBoxList)) {
      updateBoxList();
    }
  };

  const updateBoxList = () => {
    for (let index = 0; index < orderList.current.length; index++) {
      setTimeout(() => {
        setBoxList((boxList) => {
          const updatedBoxList = [...boxList];
          updatedBoxList[orderList.current[index]].color = "white";
          if (index + 1 == orderList.current.length) {
            orderList.current = [];
          }
          return updatedBoxList;
        });
      }, (index + 1) * 1000);
    }
  };

  const generateBoxes = () => {
    const UI = [];
    for (let i = 0; i < 7; i++) {
      const ref = useRef();
      UI.push(
        <Container
          className={`container-${i}`}
          ref={ref}
          key={boxList[i].id}
          id={boxList[i].id}
          color={boxList[i].color}
          handleBoxClick={handleBoxClick}
        />
      );
    }
    return <>{UI}</>;
  };

  return <div className='app-Container'>{generateBoxes()}</div>;
};

export default App;
