import React, { FC } from "react";
import "./NumbCont.scss";

interface NumbContProps {
  readonly startNumb: number;
  readonly endNumb: number;
}

const NumbCont: FC<NumbContProps> = ({ startNumb, endNumb }) => {
  return (
    <div className="numbCont">
      <span className="leftNumb" aria-label="Start year">
        {startNumb}
      </span>
      <span className="rightNumb" aria-label="End year">
        {endNumb}
      </span>
    </div>
  );
};

export default NumbCont;
