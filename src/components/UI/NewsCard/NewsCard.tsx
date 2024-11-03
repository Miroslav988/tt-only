import React, { FC } from "react";
import "./NewsCard.scss";

interface NewsCardProps {
  readonly newsDate: number;
  readonly newsContent: string;
  readonly style?: React.CSSProperties;
}

const NewsCard: FC<NewsCardProps> = ({ newsDate, newsContent }) => {
  return (
    <div className="newsCont">
      <p className="newsDate">{newsDate}</p>
      <p className="newsContent">{newsContent}</p>
    </div>
  );
};

export default NewsCard;
