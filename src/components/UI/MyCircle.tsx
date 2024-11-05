import React, { useState, FC } from "react";
import "./MyCircle.scss";
import NavBtns from "./NavBtns/NavBtns";

interface MyCircleProps {
  readonly buttonList: string[];
  onActiveNameChange: (name: string) => void;
}

type Rotation = number;
type ButtonIndex = number;

const MyCircle: FC<MyCircleProps> = ({ buttonList, onActiveNameChange }) => {
  const [rotation, setRotation] = useState<Rotation>(0);
  const [btnName, setBtnName] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<ButtonIndex>(0);
  const [activeName, setActiveName] = useState<boolean>(true);
  const handleClick = (index: ButtonIndex): void => {
    if (window.innerWidth > 411) {
      const targetRotation: Rotation = 180 - index * (360 / buttonList.length);
      setRotation(targetRotation);
    }
    setActiveIndex(index);
    onActiveNameChange(buttonList[index - 1]);
    setBtnName(buttonList[index - 1]);
    setActiveName(false);
    setTimeout(() => {
      setActiveName(true);
    }, 500);
  };

  const moveForward = (): void => {
    handleClick(activeIndex + 1);
  };

  const moveBackward = (): void => {
    handleClick(activeIndex - 1);
  };

  return (
    <>
      {window.innerWidth > 411 && (
        <>
          <p className={`btnText ${activeName ? "activeName" : ""}`}>
            {btnName}
          </p>
          <div
            className="circle"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {buttonList.map((button, index: number) => {
              const rota: number =
                (index + 1) * (360 / buttonList.length) + 120;
              return (
                <button
                  key={index}
                  className={`item ${
                    activeIndex === index + 1 ? "isActive" : ""
                  }`}
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
      )}
      <div
        className="buttons-container"
        style={{ display: window.innerWidth < 411 ? "flex" : "none" }}
      >
        {buttonList.map((button, index: number) => (
          <button
            key={index}
            className={`item ${activeIndex === index + 1 ? "isActive" : ""}`}
            onClick={() => handleClick(index + 1)}
          ></button>
        ))}
      </div>
      <NavBtns
        list={buttonList}
        currentIndex={activeIndex}
        moveForward={moveForward}
        moveBackward={moveBackward}
      />
    </>
  );
};

export default MyCircle;
