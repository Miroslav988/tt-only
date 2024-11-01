import React from "react";
import "./NumbCont.scss";
interface NumbContProps {
  endNumb: number;
  startNumb: number;
}
const NumbCont: React.FC<NumbContProps> = ({ startNumb, endNumb }) => {
  return (
    <div className="numbCont">
      <span className="leftNumb">{startNumb}</span>
      <span className="rightNumb">{endNumb}</span>
    </div>
  );
};

export default NumbCont;
