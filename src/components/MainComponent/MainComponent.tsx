import React, { useState } from "react";
import "./MainComponent.scss";
import MyCircle from "../UI/MyCircle";
import { news } from "../../News.js";
import NumbCont from "../UI/Numbers/NumbCont";
import NewsSection from "../NewsSection.tsx/NewsSection";
const btns = news.map((item) => item.name);
const MainComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeName, setActiveName] = useState("");
  const [startDate, setStartDate] = useState(2007);
  const [endDate, setEndDate] = useState(2012);
  const [newsArr, setNewsArr] = useState<string[]>([]);
  const handleActiveNameChange = (name: string) => {
    const foundItem = news.find((item) => item.name === name);
    if (foundItem) {
      setNewsArr(foundItem.newsArray);
      setActiveName(name);
      const targetStartDate = foundItem.start;
      const targetEndDate = foundItem.end;
      let currentStartDate = startDate;
      let currentEndDate = endDate;

      const updateStartDate = () => {
        if (currentStartDate < targetStartDate) {
          currentStartDate += 1;
        } else if (currentStartDate > targetStartDate) {
          currentStartDate -= 1;
        }

        setStartDate(currentStartDate);

        if (currentStartDate !== targetStartDate) {
          setTimeout(updateStartDate, 50);
        }
      };

      const updateEndDate = () => {
        if (currentEndDate < targetEndDate) {
          currentEndDate += 1;
        } else if (currentEndDate > targetEndDate) {
          currentEndDate -= 1;
        }

        setEndDate(currentEndDate);

        if (currentEndDate !== targetEndDate) {
          setTimeout(updateEndDate, 50);
        }
      };

      updateStartDate();
      updateEndDate();
    }
  };
  return (
    <div className="mainCont">
      <div className="pageTitleCont">
        <h1 className="pageTitle">Исторические даты</h1>
      </div>
      <div className="circleNumbCont">
        <hr className="perp" />
        <hr className="par" />
        <MyCircle
          buttonList={btns}
          onActiveNameChange={handleActiveNameChange}
        />
        <NumbCont startNumb={startDate} endNumb={endDate} />
      </div>
      <NewsSection newsArr={newsArr} startDate={startDate} />
    </div>
  );
};

export default MainComponent;
