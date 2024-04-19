import { useState, useRef } from "react";
import "./styles.css";

export const CardCarousel = ({
  bgImage = "",
  carouselTitle = "Hello",
  carouselData = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    const newIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex + 1 >= carouselData.length
        ? carouselData.length - 1
        : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    const cardWidth = carouselRef.current.querySelector(
      ".carousel-card-wrapper"
    ).offsetWidth;
    const scrollLeft = index * cardWidth;
    carouselRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  return (
    <div
      className="carousel-wrapper"
      style={bgImage !== "" ? { backgroundImage: `url(/img/${bgImage})` } : {}}
    >
      <div className="carousel-title-wrapper">
        <h2 className="carousel-title">{carouselTitle}</h2>
      </div>

      <div className="carousel-inner">
        <div className="carousel-cards" ref={carouselRef}>
          {carouselData.map((card) => (
            <div key={card.id} className="carousel-card-wrapper">
              {card.header && (
                <div className="card-header-wrapper">
                  <h3 className="card-header">{card.header}</h3>
                </div>
              )}

              <div className={`card-container ${card.header !== undefined && card.header !== null ? "" : "card-width"}`}>
                {card.mainTitle && (
                  <div className="carousel-card-title-wrapper">
                    <span className="carousel-card-title card-title-left">
                      {card.mainTitle.left}
                    </span>
                    <span className="carousel-card-title card-title-right">
                      {card.mainTitle.right}
                    </span>
                  </div>
                )}
                <h3 className="card-subtitle">{card.subTitle}</h3>

                <div className="stats-list-wrapper">
                  {card.statsList.map((stat, idx) => (
                    <div key={idx} className="stat-wrapper">
                      <span className="statistic">{stat.statistic}</span>
                      <span className="value">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bottom-list-wrapper">
                  {card.bottomList.map((bottom, idx) => (
                    <div key={idx} className={`bottom-wrapper ${bottom.separator !== null && bottom.separator !== undefined ? "bottom-separator" : ""}`}>
                      <span className="bottom-subheader">
                        {bottom.subheader}
                      </span>
                      <span className="value">{bottom.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-arrows">
          <button
            type="button"
            className="carousel-arrow arrow-left"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="arrow-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-arrow arrow-right"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="arrow-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
