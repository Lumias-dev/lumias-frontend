import React from "react";
import "./news.css";
import newslaunch from "../../assets/news/newslaunch.png";
import newspolygon from "../../assets/news/newslaunch.png";
import newswhitepaper from "../../assets/news/newslaunch.png";

const Article = (imgurl, date, title) => {
  return (
    <div className="article">
      <div className="article-images">
        <img src={imgurl} alt="imgurl" />
      </div>
      <div className="article-content">
        <p>{date}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className="news">
      <div className="news-header">
        <img src={newslaunch} alt="newswhitepaper" />
        <h1>Welcome to the first week of Lumias!</h1>
      </div>
      <div className="news-latest">
        <h1>Latest News</h1>
        <p>Stay up to date on the latest news</p>
        {/* <Article
          imgurl={newspolygon}
          date="Sep 26th, 2023"
          title="Lumias Launch"
        /> */}
      </div>
    </div>
  );
};

export default News;
