import React, { FC } from "react";
import "./NavBtns.scss";

interface NavBtnsProps {
  readonly list: ReadonlyArray<string>;
  readonly currentIndex: number;
  readonly moveForward: () => void;
  readonly moveBackward: () => void;
}

const NavBtns: FC<NavBtnsProps> = ({
  list,
  currentIndex,
  moveForward,
  moveBackward,
}) => {
  const formatIndex = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="navBtnsCont">
      <span className="counter">
        {formatIndex(currentIndex)}/{formatIndex(list.length)}
      </span>
      <div className="navBtns">
        <button
          onClick={moveBackward}
          className="backward btn"
          disabled={currentIndex - 1 === 0}
          type="button"
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          onClick={moveForward}
          className="forward btn"
          disabled={currentIndex === list.length}
          type="button"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NavBtns;
