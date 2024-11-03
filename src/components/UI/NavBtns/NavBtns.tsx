import React from "react";
import "./NavBtns.scss";
interface NavBtnsProps {
  list: string[];
  currentIndex: number;
  moveForward: () => void;
  moveBackward: () => void;
}
const NavBtns: React.FC<NavBtnsProps> = ({
  list,
  currentIndex,
  moveForward,
  moveBackward,
}) => {
  return (
    <div className="navBtnsCont">
      <span className="counter">
        0{currentIndex}/0{list.length}
      </span>
      <div className="navBtns">
        <button
          onClick={moveBackward}
          className="backward btn"
          disabled={currentIndex - 1 === 0}
        >
          &lt;
        </button>
        <button
          onClick={moveForward}
          className="forvard btn"
          disabled={currentIndex === list.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NavBtns;
