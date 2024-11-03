import React from "react";
import "./NewsCard.scss";
interface NewsCardProps {
  newsDate: number;
  newsContent: string;
  style?: React.CSSProperties;
}
const NewsCard: React.FC<NewsCardProps> = ({ newsDate, newsContent }) => {
  return (
    <div className="newsCont">
      <p className="newsDate">{newsDate}</p>
      <p className="newsContent">{newsContent}</p>
    </div>
  );
};

export default NewsCard;
