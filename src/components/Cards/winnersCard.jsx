import React, { useState, useEffect, useRef } from "react";
import "../../index.css";

const CarouselCard = ({ image, name, description, tag }) => (
  <div className="flex-shrink-0 w-64 h-24 bg-white rounded-lg shadow-md mr-4 flex overflow-hidden">
    <img src={image} alt={name} className="w-24 h-24 object-cover" />
    <div className="flex flex-col justify-between p-2 flex-grow">
      <div>
        <h3 className="font-bold text-sm">{name}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  </div>
);

const AutoScrollCarousel = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollContainer) {
          scrollContainer.scrollLeft += 1;
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScrolling();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isHovered]);

  return (
    <div
      className="w-full hide-horizontal-scrollbar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item, index) => (
          <CarouselCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

// Example usage
const WinnersCard = () => {
  const carouselItems = [
    {
      image: "/src/assets/images/winnerImage1.png",
      name: "Donnie Joshua",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Et rhoncus nunc dictum massa.",
    },
    {
      image: "/src/assets/images/winnerImage2.png",
      name: "Paul Adefarsalh",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Et rhoncus nunc dictum massa.",
    },
    {
      image: "/src/assets/images/winnerImage3.png",
      name: "Lydia Thomas",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Et rhoncus nunc dictum massa.",
    },
    {
      image: "/src/assets/images/winnerImage4.png",
      name: "John Petrus",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Et rhoncus nunc dictum massa.",
    },
    {
      image: "/src/assets/images/winnerImage5.png",
      name: "Matt Damon",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Et rhoncus nunc dictum massa.",
    },
    {
      image: "/src/assets/images/winnerImage6.png",
      name: "Danny James",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Et rhoncus nunc dictum massa.",
    },
  ];

  return (
    <div className="p-4 ">
      <AutoScrollCarousel items={carouselItems} />
    </div>
  );
};

export default WinnersCard;
