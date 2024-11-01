import React, { useState } from "react";
import "./MainComponent.scss";
import MyCircle from "../UI/MyCircle";
import { news } from "../../News.js";
const btns = news.map((item) => item.name);
const MainComponent = () => {
  const [activeName, setActiveName] = useState("");
  const handleActiveNameChange = (name: string) => {
    setActiveName(name);
  };
  return (
    <div className="mainCont">
      <hr className="perp" />
      <hr className="par" />
      <h1 className="pageTitle">Исторические даты</h1>
      <MyCircle buttonList={btns} onActiveNameChange={handleActiveNameChange} />
    </div>
  );
};

export default MainComponent;
