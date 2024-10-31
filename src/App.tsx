import React, { useState } from "react";
import MyCircle from "./components/UI/MyCircle";
import "./App.scss";
import { start } from "repl";
const news = [
  {
    name: "Спорт",
    start: 1997,
    end: 2001,
    newsArr: [
      "ndsbfnmdsbfnmdsm,c dsnfmd,snf,b sdfdsf",
      "dskfjdsfjkhdshjb dsfsdf dsfsd",
      "dsbfdm,sfj,jdsbf dfdsfsvc xdsfdsfdsf",
    ],
  },
  {
    name: "Кино",
    start: 1997,
    end: 2001,
    newsArr: [
      "ndsbfnmdsbfnmdsm,c dsnfmd,snf,b sdfdsf",
      "dskfjdsfjkhdshjb dsfsdf dsfsd",
      "dsbfdm,sfj,jdsbf dfdsfsvc xdsfdsfdsf",
    ],
  },
  {
    name: "Литература",
    start: 1997,
    end: 2001,
    newsArr: [
      "ndsbfnmdsbfnmdsm,c dsnfmd,snf,b sdfdsf",
      "dskfjdsfjkhdshjb dsfsdf dsfsd",
      "dsbfdm,sfj,jdsbf dfdsfsvc xdsfdsfdsf",
    ],
  },
  {
    name: "Искусство",
    start: 1997,
    end: 2001,
    newsArr: [
      "ndsbfnmdsbfnmdsm,c dsnfmd,snf,b sdfdsf",
      "dskfjdsfjkhdshjb dsfsdf dsfsd",
      "dsbfdm,sfj,jdsbf dfdsfsvc xdsfdsfdsf",
    ],
  },
  {
    name: "Музыка",
    start: 1997,
    end: 2001,
    newsArr: [
      "ndsbfnmdsbfnmdsm,c dsnfmd,snf,b sdfdsf",
      "dskfjdsfjkhdshjb dsfsdf dsfsd",
      "dsbfdm,sfj,jdsbf dfdsfsvc xdsfdsfdsf",
    ],
  },
  {
    name: "Наука",
    start: 1997,
    end: 2001,
    newsArr: [
      "ndsbfnmdsbfnmdsm,c dsnfmd,snf,b sdfdsf",
      "dskfjdsfjkhdshjb dsfsdf dsfsd",
      "dsbfdm,sfj,jdsbf dfdsfsvc xdsfdsfdsf",
    ],
  },
];
const btns = news.map((item) => item.name);
function App() {
  const [activeName, setActiveName] = useState("");
  const handleActiveNameChange = (name: string) => {
    setActiveName(name);
  };
  return (
    <div className="App">
      <div className="mainCont">
        <hr className="perp" />
        <hr className="par" />
        <MyCircle
          buttonList={btns}
          onActiveNameChange={handleActiveNameChange}
        />
      </div>
    </div>
  );
}

export default App;
