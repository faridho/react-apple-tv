import React from 'react';
import AppleTVPlus from "./icons/apple-tv-plus";
import ArrowLink from "./icons/arrow-link";
import { moviesTop, moviesBottom } from "./source";
import "./style.scss";

const App: React.FunctionComponent = () => {
  const [translate, setTranslate] = React.useState(-0)

  const animates = () => {
    const list = []
    for(let i=0; i<2; i++) {
      list.push({
        transform: `translateX(${i > 0 ? (translate - 110) : translate}px)`,
        transitionDuration: '12s',
        transitionTimingFunction: 'linear',
      })
    }
    return list
  }

  React.useEffect(() => {
    setTranslate(-600)
  })

  const movieListTop = moviesTop.map((item: string, index: number) => (
    <img key={index} className="movies__card" src={item} />
  ))

  const movieListBottom = moviesBottom.map((item: string, index: number) => (
    <img key={index} className="movies__card" src={item} />
  ))

  return (
    <div className="container">
      <div className="card">
        <div className="card__logo">
          <AppleTVPlus />
        </div>
        <div className="card__description">
          Get 3 months of Apple TV+ free <br />when you buy an iPad. 
        </div>
        <div className="card__link">
          <ul className="link_list">
            <li>
              <a href="">
                Try it free<sup className="sup-text">5</sup>
                <ArrowLink />
              </a>
            </li>
            <li>
              <a href="">Learn more</a>
            </li>
          </ul>
        </div>
        <div className="movies">
          <div className="movies__top" style={animates()[0]}>
            { movieListTop }
          </div>
          <div className="movies__top" style={animates()[1]}>
            { movieListBottom }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

