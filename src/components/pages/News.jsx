import React from "react";
import "./news.css";
import newslaunch from "../../assets/news/newslaunch.png";
import newspolygon from "../../assets/news/newspolygon.png";
import newswhitepaper from "../../assets/news/newswhitepaper.png";

// const Article = (imgurl, date, title) => {
//   return (
//     <div className="article">
//       <div className="article-images">
//         <img src={imgurl} alt="imgurl" />
//       </div>
//       <div className="article-content">
//         <p>{date}</p>
//         <p>{title}</p>
//       </div>
//     </div>
//   );
// };

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
        <div className="news-latest-container">
          <div>
            <a
              href="https://lumias.medium.com/lumias-polygon-collaboration-5a1c2b4d82ac"
              target="_blank"
            >
              <img src={newspolygon} alt="polygon" />
              <h1>Lumias: Polygon Collaboration</h1>
              <p>Oct 20, 2022</p>
            </a>
          </div>
          <div>
            <a
              href="https://lumias.medium.com/lumias-whitepaper-a15f66aee125"
              target="_blank"
            >
              <img src={newswhitepaper} alt="whitepaper" />
              <h1>Lumias: Whitepaper</h1>
              <p>Oct 9, 2022</p>
            </a>
          </div>
          <div>
            <a
              href="https://lumias.medium.com/lumias-launch-2fcb3f0e7d9b"
              target="_blank"
            >
              <img src={newslaunch} alt="launch" />
              <h1>Lumias Launch</h1>
              <p>Oct 9, 2022</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
