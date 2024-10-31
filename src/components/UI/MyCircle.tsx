import React, { useState } from "react";
import "./MyCircle.scss";

interface MyCircleProps {
  buttonList: string[];
  onActiveNameChange: (name: string) => void;
}

const MyCircle: React.FC<MyCircleProps> = ({
  buttonList,
  onActiveNameChange,
}) => {
  const [rotation, setRotation] = useState(0);
  const [btnName, setBtnName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeName, setActiveName] = useState(false);
  const handleClick = (index: number) => {
    let targetRotation = 0;
    targetRotation = 180 - index * 60 - targetRotation;
    setActiveIndex(index);
    onActiveNameChange(buttonList[index - 1]);
    setBtnName(buttonList[index - 1]);
    setRotation(targetRotation);
    setActiveName(false);
    setTimeout(() => {
      setActiveName(true);
    }, 500);
  };
  return (
    <>
      <p className={`btnText ${activeName ? "activeName" : ""}`}>{btnName}</p>
      <div className="circle" style={{ transform: `rotate(${rotation}deg)` }}>
        {buttonList.map((button, index) => {
          const rota = (index + 1) * 60 + 120;
          return (
            <button
              key={index}
              className={`item ${activeIndex === index + 1 ? "isActive" : ""}`}
              onClick={() => handleClick(index + 1)}
              style={{
                transform: `rotate(${rota}deg) translate(265px) rotate(-${rota}deg)`,
              }}
            >
              <p
                className="btnNumb"
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                {index + 1}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default MyCircle;
